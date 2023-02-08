function FindProxyForURL(url, host) {
  if (url.startsWith("https://api.ncarzone.com"))
    return "PROXY 172.25.36.125:8080";
  else
    return "DIRECT";
}
