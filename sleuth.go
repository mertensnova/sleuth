package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
	"strings"

	"golang.org/x/net/html"
)

type LookUpResults struct {
	Status      string  `json:"status"`
	Country     string  `json:"country"`
	CountryCode string  `json:"countryCode"`
	Region      string  `json:"region"`
	RegionName  string  `json:"regionName"`
	City        string  `json:"city"`
	Zip         string  `json:"zip"`
	Lat         float64 `json:"lat"`
	Lon         float64 `json:"lon"`
	Timezone    string  `json:"timezone"`
	Isp         string  `json:"isp"`
	Org         string  `json:"org"`
	As          string  `json:"as"`
	Query       string  `json:"query"`
}

func SendRequest(value string) []byte {

	client := &http.Client{}

	request, err := http.NewRequest("GET", value, nil)
	if err != nil {
		log.Fatalln(err)
	}

	response, err := client.Do(request)

	if err != nil {
		log.Fatalln(err)
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		log.Fatalln(err)
	}

	return body
}

func ClickJackingTest(value string) {
	if !strings.HasPrefix("http://", value) && !strings.HasPrefix("https://", value) {
		value = "http://" + value
	}

	resp, err := http.Get(value)

	if err != nil {
		log.Fatal(err)
	}

	if resp.Header.Get("X-Frame-Options") == "" {
		fmt.Println("\n[*] \033[1;34mX-Frame-Options-Header is missing ! \033[1;m")
		fmt.Println("[!] \033[1;34mClickjacking is possible,this site is vulnerable to Clickjacking\033[1;m")
	} else {
		fmt.Println("[+] \033[1;34mClick Jacking Header is present \033[1;m")
	}
}

func HTTPGrabber(value string) {

	if !strings.HasPrefix("http://", value) && !strings.HasPrefix("https://", value) {
		value = "http://" + value
	}

	path, err := exec.LookPath("http")

	if err != nil {
		log.Fatalln("http not found")
	}

	cmd := exec.Command(path, "-v", value)

	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err = cmd.Run()

	if err != nil {
		log.Fatalln(err)
	}

	os.Stdout.Sync()
	os.Stderr.Sync()
}

func IPLookUP(value string) {

	var data LookUpResults

	const base string = "http://ip-api.com/json/"

	url := base + value
	body := SendRequest(url)
	json.Unmarshal(body, &data)

	fmt.Println("\n [+] \033[34mUrl: " + url + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "IP: " + data.Query + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "Status: " + data.Status + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "Region: " + data.RegionName + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "Country: " + data.Country + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "City: " + data.City + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "ISP: " + data.Isp + "\033[0m")
	//fmt.Println(" [+] " + "\033[34m Lat & Lon: " + data.Lat + " & " + data.Lon + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "Zipcode: " + data.Zip + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "TimeZone: " + data.Timezone + "\033[0m")
	fmt.Println(" [+] " + "\033[34m" + "AS: " + data.As + "\033[0m" + "\n")
}

func DNSLookUp(value string) {

	path, err := exec.LookPath("dig")

	if err != nil {
		log.Fatalln("dig not found")
	}

	cmd := exec.Command(path, value, "+trace", "ANY")

	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err = cmd.Run()

	if err != nil {
		log.Fatalln(err)
	}

	os.Stdout.Sync()
	os.Stderr.Sync()
}

func Whois(value string) {

	path, err := exec.LookPath("whois")

	if err != nil {
		log.Fatalln("dig not found")
	}

	cmd := exec.Command(path, value)

	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err = cmd.Run()

	if err != nil {
		log.Fatalln(err)
	}

	os.Stdout.Sync()
	os.Stderr.Sync()
}

func WhatWeb(value string) {

	path, err := exec.LookPath("whatweb")

	if err != nil {
		log.Fatalln("dig not found")
	}

	cmd := exec.Command(path, value)

	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err = cmd.Run()

	if err != nil {
		log.Fatalln(err)
	}

	os.Stdout.Sync()
	os.Stderr.Sync()
}

func RobotScanner(value string) {

	if !strings.HasPrefix("http://", value) && !strings.HasPrefix("https://", value) {
		value = "http://" + value
		value = value + "/robots.txt"
	}

	body := SendRequest(value)
	fmt.Println("\033[34m" + string(body) + "\033[1;m")

}

func LinkGrabber(value string) {

	if !strings.HasPrefix("http://", value) && !strings.HasPrefix("https://", value) {
		value = "http://" + value
	}

	body := SendRequest(value)

	fmt.Println("\n[+] Crawling URL " + "\033[34m" + value + "\033[0m\n")

	doc, err := html.Parse(strings.NewReader(string(body[:])))

	if err != nil {
		log.Fatal(err)
	}

	var f func(*html.Node)
	f = func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "a" {
			for _, a := range n.Attr {
				if a.Key == "href" {
					results := a.Val
					if a.Val[0] == '/' {
						results = value + results
						fmt.Println("\033[36m[->] " + results + "\033[36m")
					} else {

						fmt.Println("\033[36m[->] " + results + "\033[36m")
					}
					break
				}
			}
		}

		for c := n.FirstChild; c != nil; c = c.NextSibling {
			f(c)
		}
	}

	f(doc)
}
