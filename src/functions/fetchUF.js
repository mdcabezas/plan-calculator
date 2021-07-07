const xmlUF = fetch("https://zeus.sii.cl/admin/rss/sii_ind_rss.xml")
              .then(response => response.text())
              .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
              .then(data => console.log(data))