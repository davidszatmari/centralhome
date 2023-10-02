# config.json fálj dokumentum

## id
- képek sorrendét befolyásolja
- "1-999" lehet számozni
- "none" így nem lesz látható 

Példa #1:
```sh
            "id": "4",
```
> így a kép az 4. helyen jelenik meg


Példa #2:
```sh
            "id": "none",
```
> kép így nem fog megjelenni


## image
- képnek a fálj helyét lehet használni 
- képnek a link-ét lehet használni

Példa #1
```sh
            "image": "kepek/ikon-1.jpg",
```

Példa #2
```sh
            "image": "https://pelda.com/jpg/ikon.jpg",
```


## link
- kép rákattintáskor erre az oldalra fog továbbítani
- csak létező link-et lehet megadni 

Példa #1
```sh
            "link": "https://www.centralhome.hu/",
```


## text
- kép alatt megjelenő szöveg
- csak szöveg és szám lehet
- link nem lesz kattintható

Példa #1
```sh
            "text": "Weboldal"
```
