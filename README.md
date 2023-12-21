# Sleuth - Information Gathering Tool

Sleuth is a powerful information gathering tool written in Golang to assist in reconnaissance and data collection during cybersecurity assessments. It provides a range of functionalities to help users gather essential information about a target.

## Features

- **IP Address Information:** Retrieve detailed information about IP addresses, including geolocation, ISP details, and more.

- **Domain Information:** Obtain information about a domain, such as WHOIS details, DNS records, and registrar information.

- **Subdomain Enumeration:** Discover subdomains associated with a target domain to expand the scope of your reconnaissance.

- **Open Port Scanning:** Identify open ports on a target system to assess potential vulnerabilities.

- **HTTP Header Analysis:** Extract and analyze HTTP headers to gather insights about web servers.

- **Technology Stack Detection:** Identify technologies used by a website or web application.

## Installation

Clone the repository and build Sleuth using Go:

```bash
git clone https://github.com/yourusername/sleuth.git
cd sleuth
go build
```

## Usage

Sleuth provides multiple options for information gathering. You can specify the target and the type of information you want to retrieve using the following command-line options:

### Options:

- **-dns <domain>:**
  Retrieve DNS information for the specified domain.

  ```bash
  ./sleuth -dns example.com
  ```

- **-robot <domain>:**
  Perform robots.txt analysis for the specified domain.

  ```bash
  ./sleuth -robot example.com
  ```

- **-link-grab <domain>:**
  Extract links from the specified domain.

  ```bash
  ./sleuth -link-grab example.com
  ```

- **-ip <ip_address>:**
  Retrieve detailed information about the specified IP address.

  ```bash
  ./sleuth -ip 172.217.6.196
  ```

- **-cl <domain>:**
  Perform content discovery for the specified domain.

  ```bash
  ./sleuth -cl example.com
  ```

- **-http <domain>:**
  Analyze HTTP headers for the specified domain.

  ```bash
  ./sleuth -http example.com
  ```

- **-whois <domain>:**
  Retrieve WHOIS information for the specified domain.

  ```bash
  ./sleuth -whois example.com
  ```

- **-whatweb <domain>:**
  Identify technologies used by the specified website.
  ```bash
  ./sleuth -whatweb example.com
  ```

### Example:

Retrieve DNS information for a specific domain:

```bash
./sleuth -dns example.com
```

You can replace `example.com` with the target domain or IP address and choose the appropriate option based on the information you want to gather.

## Contributing

Contributions are welcome! If you'd like to contribute to Sleuth,
