package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {

	var url string = "https://api.football-data.org/v4/matches"
	client := http.Client{}

	request, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		log.Fatalln(err.Error())

	}

	response, err := client.Do(request)

	body, err := ioutil.ReadAll(response.Body)

	if err != nil {
		log.Fatalln(err.Error())
	}

	fmt.Println(string(body))
}
