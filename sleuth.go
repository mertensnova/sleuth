package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"
	"strings"

	"golang.org/x/net/html"
)

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

func RobotScanner(value string) {

	if !strings.HasPrefix("http://", value) && !strings.HasPrefix("https://", value) {
		value = "http://" + value
		value = value + "/robots.txt"
	}

	client := &http.Client{}

	request, err := http.NewRequest("GET", value, nil)
	if err != nil {
		log.Fatalln(err)
	}
	response, err := client.Do(request)
	if err != nil {
		log.Fatalln(err)
	}

	body, err := ioutil.ReadAll(response.Body)
	fmt.Println("\033[34m" + string(body) + "\033[1;m")

}

func LinkGrabber(value string) {

	if !strings.HasPrefix("http://", value) && !strings.HasPrefix("https://", value) {
		value = "http://" + value
	}

	client := &http.Client{}
	request, err := http.NewRequest("GET", value, nil)

	if err != nil {
		log.Fatalln(err)
	}

	response, err := client.Do(request)

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("\n[+] Crawling URL " + "\033[34m" + value + "\033[0m\n")

	body, err := ioutil.ReadAll(response.Body)

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
						fmt.Println("\033[36m[->] "+results+"\033[36m")
					} else {

						fmt.Println("\033[36m[->] "+results+"\033[36m")
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
