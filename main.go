package main

import (
	"flag"
	"os"
)

var help string = `USAGE:
    swiss [options] <input> 

OPTIONS:
  -h            Show this help message
  -dns          Print verbose output
  -robot        Print verbose output
  -ip           Print verbose output
   
EXAMPLES:
   myprogram --config config.yaml --verbose data.csv
   myprogram --timeout 60 data.txt > results.out
   myprogram --threads 8 *.data
`

func main() {

	value, option := Options()

	switch option {
	case "-dns":
		DNSLookUp(value)
	case "-robot":
		RobotScanner(value)
	case "-link-grab":
		LinkGrabber(value)
	case "-ip":
		IPLookUP(value)
	case "-cl":
		ClickJackingTest(value)
    case "-http":
        HTTPGrabber(value)
	}
}

func Options() (string, string) {

	var robo_value string
	var dns_value string
	var link_value string
	var ip_value string
	var cl_value string
	var http_value string
	var option string = os.Args[1]

	flag.StringVar(&dns_value, "dns", "google.com", "usage: -dns google.com")
	flag.StringVar(&robo_value, "robot", "google.com", "usage: -robot google.com")
	flag.StringVar(&link_value, "link-grab", "google.com", "usage: -robot google.com")
	flag.StringVar(&ip_value, "ip", "172.217.6.196", "usage: -ip 172.217.6.196")
	flag.StringVar(&cl_value, "cl", "google.com", "usage: -cl google.com")
	flag.StringVar(&http_value, "http", "google.com", "usage: -http google.com")
    flag.Parse()

	switch option {
	case "-dns":
		return dns_value, option
	case "-robot":
		return robo_value, option
	case "-link-grab":
		return link_value, option
	case "-ip":
		return ip_value, option
	case "-cl":
		return cl_value, option
	case "-http":
		return http_value, option

	}

	return "", option
}
