var SEEKING = false;
var SHOWDURATION = true;
var DURATION;
var playPauseButton = document.querySelector('.amplitude-play-pause');
var INITIALIZED = false;


var configuration = {

	"songs": [

            ////////////////
            //inaugural///
            ////////////////
            {//0
                "name": "Opening Remarks Pt. 1",
                "artist": "Felice Doynov",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1hLq1viMmVJHetV0LyNQpvft8YYLQyYJ9",
                "duration": "2:18",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//1
                "name": "Opening Remarks Pt. 2",
                "artist": "Brenda Vongova",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1oI60LmmEG9hTHC98yNEABLBRdWMjO62I",
                "duration": "2:17",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//2
                "name": "Comments — Joseph Boulogne",
                "artist": "Eli Greenhoe",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1IiN91ADD-nmIZBfwHLVp4Rljv7vwXuTg",
                "duration": "1:43",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//3
                "name": "String Quartet No. 5",
                "artist": "Joseph Boulogne",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1rmv0aoAKBC2F3n_C2bVu56JxtWtOZq_b",
                "duration": "11:22",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "composerDates": {
                    "birth": 1745,
                    "death": 1799
                }, 
                "fullName": "String Quartet No. 5 in G Major",
                "movements": [
                    ["I.", "Allegro Assai"],
                    ["II.", "Gracioso"]
                ],
                "performers": [
                    ["Ariel Horowitz", "violin"],
                    ["Johnna Wu", "violin"],
                    ["Alexandra Simpson", "viola"],
                    ["Adrian Daurov", "cello"]
                ]
            },
            {//4
                "name": "Comments — William Grant Still",
                "artist": "Tanner Porter",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1SwBWIgkm5y9V9E2Xs2AqkaHueDzeLDLW",
                "duration": "1:16",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//5
                "name": "Bayou Home",
                "artist": "William Grant Still",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1LdqsBiSkdLt_Kga8JEFHEUU545-EAHYI",
                "duration": "4:01",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "arrangedBy": "Alexa Still",
                "composerDates": {
                    "birth": 1895,
                    "death": 1978
                }, 
                "performers": [
                    ["Cornelia Sommer", "bassoon"],
                    ["Luis Ortiz", "piano"]
                ]
            },
            {//6
                "name": "Sonata for Bassoon and Piano",
                "artist": "Ulysses Kay",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1l4fKCzLbjzN2Q08wyKKTCmI-6DWvz9C9",
                "duration": "5:10",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "composerDates": {
                    "birth": 1917,
                    "death": 1995
                }, 
                "performers": [
                    ["Cornelia Sommer", "bassoon"],
                    ["Luis Ortiz", "piano"]
                ]
            },
            {//7
                "name": "Comments — Ulysses Kay",
                "artist": "Tanner Porter",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "duration": "1:19",
                "url": "https://drive.google.com/uc?export=download&id=1gn6bf9wiYpLgsOfQ2KEBZLYKxbTrSErn",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//8
                "name": "Comments — Yuko Uebayashi",
                "artist": "Anteo Fabris",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1cgr0Yf9Xlx9Ax3ZVoAuFm9L-NHef5qi-",
                "duration": "3:41",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//9
                "name": "Town Light",
                "artist": "Yuko Uebayashi",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1MqdMfw3ddppY_UsnIhrhfqgWLI6Ypl83",
                "duration": "6:26",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "fullName": "Town Light (1997)",
                "composerDates": {
                    "birth": 1975,
                }, 
                "performers": [
                    ["Amir Farsi", "flute"],
                    ["Felice Doynov", "flute"],
                    ["Vyacheslav Gryaznov", "piano"]
                ]
            },
            {//10
                "name": "Comments — Élisabeth Jacquet de La Guerre",
                "artist": "Eli Greenhoe",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1hTkHHGVQGEJVkInAdeMo-C5JF-ts27EQ",
                "duration": "1:29",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//11
                "name": "Sonata No. 1",
                "artist": "Élisabeth Jacquet de La Guerre",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1worqt4gyCf67NdrPu3KvNFGE4zRJNgHP",
                "duration": "15:57",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "fullName": "Sonata No. 1 in D minor for violin and continuo (1707)",
                "composerDates": {
                    "birth": 1665,
                    "death": 1729
                }, 
                "movements": [
                    ["I.", "Adagio"],
                    ["II.", "Presto"],
                    ["III.", "Adagio - Presto"],
                    ["IV.", "Presto"],
                    ["V.", "Aria"],
                    ["VI.", "Presto"]
                ],
                "performers": [
                    ["Dhyani Heath", "violin"],
                    ["Jonathan Salamon", "harpsichord"],
                    ["Lucas Guedes", "cello"]
                ]
            },
            {//12
                "name": "Comments — Giaccobe Cervetto",
                "artist": "Alishan Gezgin",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1NlOeGBqazG2ZNjkpN3HXV7s9w8q0oPq-",
                "duration": "1:29",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//13
                "name": "Sonata for flute and continuo",
                "artist": "Giaccobe Cervetto",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=11OaQiLGTxnpidXITmQmrv5Yd4v3WAytM",
                "duration": "10:08",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "fullName": "Sonata in D major for flute and continuo, Op. 3 No. 2",
                "composerDates": {
                    "birth": 1680,
                    "death": 1783
                }, 
                "movements": [
                    ["I.", "Adagio"],
                    ["II.", "Allegro con spirito"],
                    ["III.", "Minuetto"]
                ],
                "performers": [
                    ["Leo Sussman", "flute"],
                    ["Jonathan Salamon", "harpsichord"],
                ]
            },
            {//14
                "name": "Comments — Beach, Viardot, Boulanger",
                "artist": "Fjóla Evans",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-3gT3Wk2bRXcyqlFQjwksn2XXwp5H9a4",
                "duration": "3:02",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//15
                "name": "Invocation, Op. 55",
                "artist": "Amy Beach",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1x8u8hRr79JqlH3Jvn07HMAiNigVFGWo8",
                "duration": "5:01",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "composerDates": {
                    "birth": 1867,
                    "death": 1944
                }, 
                "performers": [
                    ["Ariel Horowitz", "violin"],
                    ["Brenda Vongova", "piano"]
                ]
            },
            {//16
                "name": "Romance",
                "artist": "Pauline Viardot",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-TCZ1vnLcCy3qcYI2GZAu-LKRAdXmr_G",
                "duration": "3:10",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "composerDates": {
                    "birth": 1821,
                    "death": 1910
                }, 
                "performers": [
                    ["Ariel Horowitz", "violin"],
                    ["Brenda Vongova", "piano"]
                ]

            },
            {//17
                "name": "Nocturne",
                "artist": "Lili Boulanger",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1ETa9gKRGkMekvNJ3w97mrgEwKzo06Rjx",
                "duration": "4:21",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg",
                "composerDates": {
                    "birth": 1893,
                    "death": 1918
                }, 
                "performers": [
                    ["Ariel Horowitz", "violin"],
                    ["Brenda Vongova", "piano"]
                ]
            },
            {//18
                "name": "Closing Remarks",
                "artist": "Felice Doynov",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=10IhyEzPPyLwT4JQwxD531jTIQV-j6d6x",
                "duration": "0:47",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            //////////////
            //un-launch///
            //////////////
            {//0
                "name": "Opening Remarks Pt. 1",
                "artist": "Brenda Vongova",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=11kl0Ha0KiafQ74l3PFtgNhQ-H2J9GOCi",
                "duration": "3:30",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//1
                "name": "Opening Remarks Pt. 2",
                "artist": "Alison Rowe",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1YFvbAia6LYk4IA6Hst10gwjrUCPxYilr",
                "duration": "5:26",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },  
            {//2
                "name": "Opening Remarks Pt. 3",
                "artist": "Kellie-Chandra Ognimba",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1aXj1B4_nb_AvXeQD74zcMDDVYpb9OHhh",
                "duration": "6:14",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//3
                "name": "Opening Remarks Pt. 4",
                "artist": "Felice Doynov",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=16L-pI6MzXPF9-M2tvyZtXfF3i6F0HBoG",
                "duration": "1:43",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//4
                "name": "Comments — William Grant Still and Ulysses Kay",
                "artist": "Jonathan Salamon",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1qT9xVNPebdS1-tP43jM1J5egUJU5OPP3",
                "duration": "2:03",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//5
                "name": "Bayou Home",
                "artist": "William Grant Still",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1stA8WFH-EW8aD4J_x6Cqm1QI40DPLYLE",
                "duration": "3:41",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "arrangedBy": "Alexa Still",
                "composerDates": {
                    "birth": 1895,
                    "death": 1978
                }, 
                "performers": [
                    ["Cornelia Sommer", "bassoon"],
                    ["Luis Ortiz", "piano"]
                ]
            },
            {//6
                "name": "Sonata for Bassoon and Piano",
                "artist": "Ulysses Kay",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1V2fXkvNRVpJ5P0XZwxEKDRpudILcx_Qx",
                "duration": "5:16",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "composerDates": {
                    "birth": 1917,
                    "death": 1995
                }, 
                "performers": [
                    ["Cornelia Sommer", "bassoon"],
                    ["Luis Ortiz", "piano"]
                ]
            },
            {//7
                "name": "Comments — Joseph Boulogne",
                "artist": "Felice Doynov",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-vLoVnA1haoSk3FzH4i_xCI7rSAWHpQU",
                "duration": "1:12",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//8
                "name": "Sonata for Violin and Piano",
                "artist": "Jonathan Salamon",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1zvsEAlV_28rxfV26cqCIjqKG9Rtr3gha",
                "duration": "10:18",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "fullName": "Sonata for Violin and Piano in G minor, Op. 1b No. 3",
                "composerDates": {
                    "birth": 1745,
                    "death": 1799
                }, 
                "movements": [
                    ["I.", "Allegro"],
                    ["II.", "Rondo Gracioso"]
                ],
                "performers": [
                    ["Ariel Horowitz", "violin"],
                    ["Jonathan Salamon", "piano"],
                ]
            },
            {//9
                "name": "Comments — Pauline Viardot",
                "artist": "Jonathan Salamon",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1Z_HJME8vUi6JAPeN8L0kQvKrw3F90nFt",
                "duration": "0:40",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//10
                "name": "Romance",
                "artist": "Pauline Viardot",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1mafPPM8qLrPoeJRrOR6fzllLSiRpHDzO",
                "duration": "3:40",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "composerDates": {
                    "birth": 1821,
                    "death": 1910
                }, 
                "performers": [
                    ["Adrian Daurov", "cello"],
                    ["Brenda Vongova", "piano"],
                ]
            },
            {//11
                "name": "Comments — Lili Boulanger",
                "artist": "Jonathan Salamon",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=18OZw83rC-uw6YAU5mg7_Y35Pp4K38DTN",
                "duration": "1:12",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//12
                "name": "Nocturne",
                "artist": "Lili Boulanger",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1S9dG9p8-w2efVxHvsZVmL6wT6wvaVwX2",
                "duration": "3:50",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "composerDates": {
                    "birth": 1893,
                    "death": 1918
                }, 
                "performers": [
                    ["Adrian Daurov", "cello"],
                    ["Brenda Vongova", "piano"],
                ]
            },
            {//13
                "name": "Comments — Giaccobe Cervetto",
                "artist": "Felice Doynov",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1bhA8-ff0ITvCW9p_zsH64bs4tJQWUzel",
                "duration": "1:05",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            { //14 
                "name": "Sonata for flute and continuo",
                "artist": "Giaccobe Cervetto",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1ulirCdtz-HhH2v8QKUZFt_874AC9OclT",
                "duration": "10:09",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "fullName": "Sonata in D major for flute and continuo, Op. 3 No. 2",
                "composerDates": {
                    "birth": 1680,
                    "death": 1783
                }, 
                "movements": [
                    ["I.", "Adagio"],
                    ["II.", "Allegro con spirito"],
                    ["III.", "Minuetto"]
                ],
                "performers": [
                    ["Leo Sussman", "flute"],
                    ["Jonathan Salamon", "harpsichord"],
                ]
            },
            {//15
                "name": "Comments — Amy Beach",
                "artist": "Jonathan Salamon",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-hEImrTTa0BKa5hoobFEB6CyKw7ggPnn",
                "duration": "1:03",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//16
                "name": "Invocation, Op. 55",
                "artist": "Amy Beach",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1kgAdxSH6Of8GgwSFb1BCTT6thF7ifvL4",
                "duration": "4:59",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "composerDates": {
                    "birth": 1867,
                    "death": 1944
                }, 
                "performers": [
                    ["Ariel Horowitz", "violin"],
                    ["Brenda Vongova", "piano"]
                ]
            },
            {//17
                "name": "Comments — Julius Eastman",
                "artist": "Felice Doynov",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1wqhGpMICbbET4WGeNTBSkNMzBlbHkSFW",
                "duration": "1:43",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//18
                "name": "Touch Him When",
                "artist": "Julius Eastman",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1rNE7XO9IxQWomDC5oy0lCO5DzrPKcS5T",
                "duration": "7:22",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "composerDates": {
                    "birth": 1940,
                    "death": 1990
                }, 
                "performers": [
                    ["JIJI", "guitar"]
                ]
            },
            {//19
                "name": "Comments — Yuko Uebayashi",
                "artist": "Jonathan Salamon",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1g2bljqlVOnqpe3OJQ4UnSoWPf3Ui4eNU",
                "duration": "1:13",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            },
            {//20
                "name": "Town Light",
                "artist": "Yuko Uebayashi",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1Tz5-DIBnkYQgTQ9Cnuy4HwZ-s_3x6eDP",
                "duration": "7:12",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png",
                "fullName": "Town Light (1997)",
                "composerDates": {
                    "birth": 1975,
                }, 
                "performers": [
                    ["Amir Farsi", "flute"],
                    ["Felice Doynov", "flute"],
                    ["Brenda Vongova", "piano"]
                ]
            },
            {//21
                "name": "Closing Remarks",
                "artist": "Felice Doynov",
                "album": "HEAR at the U.N.",
                "date": "May 25, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1erbA9CV7atfHXxgyekEO8dowE-pyhXyb",
                "duration": "1:28",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_may25.png"
            }




    ],
    "playlists": {
        "inaugural": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        "un-launch": [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
    },
    "starting_playlist": "inaugural",

 
    "volume": 75,
    "callbacks": {
    	"time_update": function() {

    		DURATION = Amplitude.audio().duration;
    		if (!DURATION) {return;}
    		if (!SEEKING) {
    			var curPercent = Amplitude.getSongPlayedPercentage();
                updateProgressBackground(curPercent);
    			updateProgress(curPercent / 100);
    			var curTime = curPercent * Amplitude.audio().duration / 100;
    			updateCurrentTime(curTime);
    			updateEndTime(curTime);

                var buffered = Amplitude.getBuffered()
                console.log('b',buffered)

    		}
    		
    	},
        "album_change": function() {
            console.log("an album changed")
            //console.log(Amplitude.getActiveSongMetadata())
            //makeProgramInfo(Amplitude.getActiveSongMetadata());

        }, 
        "song_change": function() {
            console.log('change');
            //console.log(Amplitude.getActiveSongMetadata())
            makeProgramInfo(Amplitude.getActiveSongMetadata());
            setBufferUpdate();
        },
        "playlist_changed": function() {
            //console.log("playlist changed")
            //console.log(Amplitude.getActiveSongMetadata())
            //makeProgramInfo(Amplitude.getActiveSongMetadata());
        }, 
    }

};

var playlistsNameTranslation = {
    "inaugural": "HEAR Through Time",
    "un-launch": "HEAR at the UN"
}


var nextButton = document.getElementsByClassName('amplitude-next')[0]
var playButton = document.getElementsByClassName('amplitude-play-pause')[0]
var prevButton = document.getElementsByClassName('amplitude-prev')[0]


function updatePlaylist(playlist) {
    nextButton.setAttribute('amplitude-playlist', playlist);
    playButton.setAttribute('amplitude-playlist', playlist);
    prevButton.setAttribute('amplitude-playlist', playlist);
    document.querySelector('.songs-container').innerHTML = ""
    generatePlaylistSongSelect(playlist);

    var songMetas = document.querySelectorAll('[amplitude-song-info]');
    console.log(songMetas);
    for (var i = 0; i < songMetas.length; i++) {
        songMetas[i].setAttribute("amplitude-playlist", playlist);
    }

}


//Amplitude.setDebug(true)
function updateProgress(percentage) {
	document.getElementById('song-played-progress').value = percentage;
}

//time is in seconds.  convert to a formatted min:sec string and update audioplayer
function updateCurrentTime(time) {
    var [minutes, seconds] = secondsToMinutesSeconds(time);
	document.querySelector('.current-minutes').innerHTML = minutes;
    document.querySelector('.current-seconds').innerHTML = seconds;
}

//seconds is a time in seconds, convert to [minutes, seconds], formatted strings
function secondsToMinutesSeconds(secs) {
    var s = Math.floor(secs % 60);
    var m = Math.floor(secs / 60);

    var seconds = (s < 10) ? '0' + parseInt(s, 10) : '' + parseInt(s, 10);
    var minutes = (m == 0) ? '0' : '' + m;

    return [minutes,seconds]
}

//minSec is a min:sec formatted string
function minSecToSeconds(minSec) {
    var split = minSec.split(":");
    return 60*parseInt(split[0]) + parseInt(split[1]);
}



function getPlaylistDuration(playlistName) {
    var songIndices = configuration.playlists[playlistName];
    var totalDuration = 0;
    for (var i = 0; i < songIndices.length; i++) {
        var index = songIndices[i];
        totalDuration += minSecToSeconds(configuration.songs[index].duration)
    }
    var [minutes, seconds] = secondsToMinutesSeconds(totalDuration);
    return minutes + ":" + seconds

}

function updateEndTime(time) {
	var minus;

	if (SHOWDURATION) {
		time = DURATION;
		minus = ""
	} else {
		time = Math.floor(DURATION) - time;
		minus = "-"
	}


	var s = Math.floor(time % 60);
	var m = Math.floor(time / 60);

    s = Math.max(s, 0), m = Math.max(m,0);
	var seconds = (s < 10) ? '0' + parseInt(s, 10) : '' + parseInt(s, 10);
	var minutes = minus + ( (m == 0) ? '0' : '' + m );
	document.querySelector('.duration-minutes').innerHTML = minutes;
    document.querySelector('.duration-seconds').innerHTML = seconds;
}


//when duration area is clicked, switch from between duration to remaining time and 
document.querySelector('.duration').onclick = function() {
	if (DURATION) {
		SHOWDURATION = !SHOWDURATION;
		var curTime = Amplitude.getSongPlayedPercentage() * Amplitude.audio().duration / 100;
		updateEndTime(curTime) 
	}

}


	/*
	key events

    window.onkeydown = function(e) {
        return !(e.keyCode == 32);
    };
	*/

    /*
      Handles a click on the song played progress bar.
    */

document.getElementById('song-played-progress').addEventListener('mousedown', function( e ){

	SEEKING = true;

	document.addEventListener('mouseup', mouseUpUpdate);
});

/*
var mouseMoveUpdate = function(e) {
    e.preventDefault();
	var that = document.getElementById('song-played-progress');
	var offset = that.getBoundingClientRect();
    var x = e.pageX - offset.left;
    var newProgress = ( parseFloat( x ) / parseFloat( that.offsetWidth) );
    var newProgress = Math.min(Math.max(newProgress, 0), 1.0);

    var newTime = newProgress * DURATION;

    updateCurrentTime(newTime);
    updateEndTime(newTime);

    document.getElementById('song-played-progress').value = newProgress;
}
*/

document.getElementById('song-played-progress').oninput = function() {

    if (SEEKING) {
        var percentage = this.value*100;
        updateProgressBackground(percentage);
        var newTime = this.value * DURATION;
        updateCurrentTime(newTime);
        updateEndTime(newTime);
    }
}

function updateProgressBackground(value) {
    document.getElementById('song-played-progress').setAttribute(
        'style', 
        'background: linear-gradient(to right, darkblue, darkblue ' + (value -1)+ '%, lightblue ' + (value + 1) + '%, lightblue)'
    );
}

function updateBufferProgressBackground(start, end) {
   document.getElementById('song-buffer-progress').setAttribute(
        'style',
        'background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0) ' + start + '%, rgba(0,0,0,1)' + start + '%,  rgba(0,0,0,1)' + end + '%, rgba(0,0,0,0)' + end + '%, rgba(0,0,0,0))' 
    );

}

function setBufferUpdate() {
    Amplitude.audio().addEventListener('progress', function() {
        var buff = Amplitude.audio().buffered;
        var start = Number(buff.start(0).toFixed(2));
        var end =   Number(buff.end(0).toFixed(2));

        updateBufferProgressBackground(start, end);
    })
}

var mouseUpUpdate = function(e) {
	SEEKING = false;
    Amplitude.setSongPlayedPercentage(100 * document.getElementById('song-played-progress').value);
    document.removeEventListener('mouseup', mouseUpUpdate);
}

/* FOR SHOWING AND HIDING THE AUDIO PLAYER */
function showAudioplayer() {
    if (!INITIALIZED) {
        INITIALIZED = true
        initialize() 
    }
    document.getElementById('audioplayer-overlay').setAttribute('style', 'max-height: 80px')
    console.log('show it')
};

function hideAudioplayer() {
    document.getElementById('audioplayer-overlay').setAttribute('style', 'max-height: 0px')
};

document.getElementById('audioplayer-close-button').onclick = function(){
    hideAudioplayer()
};


//set up the links to the audio player
function setAudioplayerLinks() {
    var audioLinks = document.getElementsByClassName('audioplayer-link');
    for (var i = 0; i < audioLinks.length; i++){

        audioLinks[i].onclick = function() {
            showAudioplayer();
            if (this.classList.contains('play-now')) {
                var playlist = this.getAttribute('amplitude-playlist-link');
                updatePlaylist(playlist);
                playSong(playlist, 0);
                playButton.classList.replace('amplitude-paused', 'amplitude-playing')
            }
        };
    }
}

document.querySelector('.volume-container').addEventListener('mouseenter', function(e){
    document.querySelector('.volume-control-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.volume-container').addEventListener('mouseleave', hideVolume)

});

function hideVolume(e) {
    document.querySelector('.volume-container').removeEventListener('mouseleave', hideVolume);
    document.querySelector('.volume-control-wrapper').setAttribute('style', 'display: none');
}

document.querySelector('.playlist-container').addEventListener('mouseenter', function(e){
    document.querySelector('.playlist-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.playlist-container').addEventListener('mouseleave', hidePlaylist)

});

function hidePlaylist(e) {
    document.querySelector('.playlist-container').removeEventListener('mouseleave', hidePlaylist);
    document.querySelector('.playlist-wrapper').setAttribute('style', 'display: none');
}

document.querySelector('.meta-container').addEventListener('mouseenter', function(e){
    document.querySelector('.program-info-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.meta-container').addEventListener('mouseleave', hideProgram)

});

function hideProgram(e) {
    document.querySelector('.meta-container').removeEventListener('mouseleave', hideProgram);
    document.querySelector('.program-info-wrapper').setAttribute('style', 'display: none');
}

document.querySelector('.playlists-container').addEventListener('mouseenter', function(e){
    document.querySelector('.playlists-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.playlists-container').addEventListener('mouseleave', hidePlaylists)

});

function hidePlaylists(e) {
    document.querySelector('.playlists-container').removeEventListener('mouseleave', hidePlaylists);
    document.querySelector('.playlists-wrapper').setAttribute('style', 'display: none');
}



//fires whenever the slider is adjusted, so we can see when to change
document.querySelector('.amplitude-volume-slider').oninput = function() {
    var volCL = document.querySelector('.volume-image').classList;
    if (this.value < 2) {
        if (!volCL.contains("no-volume")) {
            volCL.replace("low-volume", "no-volume");
            volCL.replace("high-volume", "no-volume");
        }
    }

    else if (this.value < 50) {
        if (!volCL.contains("low-volume")) {
            volCL.replace("no-volume", "low-volume");
            volCL.replace("high-volume", "low-volume");
        }
    } else {
       if (!volCL.contains("high-volume")) {
            volCL.replace("no-volume", "high-volume");
            volCL.replace("low-volume", "high-volume");
        } 
    }


}




//populate the playlist select with a playlist 

function createSongContainer(song) {
    var songContainer = document.createElement('div');
    songContainer.className = "token-container";

    var nameContainer = document.createElement('div');
    nameContainer.className = "token-left-container";

    var songName = document.createElement('div');
    songName.className = "token-left-top";
    songName.innerHTML = song.name;


    var artist = document.createElement('div');
    artist.className = "token-left-bottom";
    artist.innerHTML = song.artist;

    var duration = document.createElement('div');
    duration.className = "token-right";
    duration.innerHTML = song.duration;

    nameContainer.appendChild(songName);
    nameContainer.appendChild(artist);

    songContainer.appendChild(nameContainer);
    songContainer.appendChild(duration);

    return songContainer;

}

function generatePlaylistSongSelect(playlistName) {

    var songIndices = configuration.playlists[playlistName];
    for (var i = 0; i < songIndices.length; i++) {

        var song = configuration.songs[songIndices[i]];
        var songContainer = createSongContainer(song)
        document.querySelector('.songs-container').appendChild(songContainer);
        //console.log(song);
        //songContainer.onclick = playSong.bind(songContainer,song);
        songContainer.onclick = Amplitude.playPlaylistSongAtIndex.bind(null, i, playlistName)
        songContainer.setAttribute('amplitude-song-index', i);
        songContainer.setAttribute('amplitude-playlist', playlistName)

        songContainer.classList.add("amplitude-song-container");
        songContainer.classList.add("amplitude-play-pause");

    }

}
function createPlaylistToken(playlist) {

    var numTracks = configuration.playlists[playlist].length;
    var duration = getPlaylistDuration(playlist);

   

    var token = document.createElement('div');
    token.className = "token-container";

    var leftContainer = document.createElement('div');
    leftContainer.className = "token-left-container";

    var nameContainer = document.createElement('div');
    nameContainer.className = "token-left-top";
    nameContainer.innerHTML = playlistsNameTranslation[playlist];

    var trackNumber = document.createElement('div');
    trackNumber.className = "token-left-bottom";
    trackNumber.innerHTML = "tracks: " + numTracks;

    var durationContainer = document.createElement('div');
    durationContainer.className = "token-right";
    durationContainer.innerHTML = duration;


    leftContainer.appendChild(nameContainer);
    leftContainer.appendChild(trackNumber);

    token.appendChild(leftContainer);
    token.appendChild(durationContainer);

    return token;
}

function generatePlaylistSelect(playlists) {
    for (var key in playlists) {
        var playlist = key;
        var playlistToken = createPlaylistToken(playlist);
        document.querySelector('.playlist-select-container').appendChild(playlistToken);
        playlistToken.className += " audioplayer-link play-now";
        playlistToken.setAttribute("amplitude-playlist-link", playlist)

    }

    //update the links to establish new playlist connections (could do this one by one more intelligently)
    setAudioplayerLinks()

}

function playSong(playlist,track) {
    //console.log(song);
    var song = Amplitude.getSongAtPlaylistIndex(playlist, 0)
    Amplitude.playNow(song);
    console.log(song);
    makeProgramInfo(song);
    document.querySelector('[amplitude-song-info="name"]').innerHTML = song.name;
    document.querySelector('[amplitude-song-info="artist"]').innerHTML = song.artist;
    document.getElementById('play-pause').click();
    setBufferUpdate()


}





////////////////////////////////////////////////
//generating program info container on the fly//
////////////////////////////////////////////////

function formatComposerDates(song) {
    if (song.composerDates === undefined) {
        return undefined;
    }
    var birth = song.composerDates.birth;
    if (birth === undefined) {
        return undefined;
    }
    var death = song.composerDates.death;
    if (death === undefined) {
        return "(b. " + birth + ")";
    } 

    return "(" + birth + " - " + death + ")";
}

function formatMovements(song) {
    var movements = document.createElement('ol');
    movements.className = "movements";
    movements.type = 'I';
    for (var i = 0; i < song.movements.length; i++) {
        var movement = document.createElement('li');
        var movementSpan = document.createElement('span');
        movementSpan.innerHTML = song.movements[i][1];
        movement.appendChild(movementSpan);
        movements.appendChild(movement);
    }
    return movements;
}

function formatPerformers(song) {
    var performers = document.createElement('ul');
    performers.className = "performers"
    for (var i = 0; i < song.performers.length; i++) {
        var performer = document.createElement('li');
        var performerSpan = document.createElement('span');
        performerSpan.innerHTML = song.performers[i][0] + ", <i>" + song.performers[i][1] + "</i>";
        performer.appendChild(performerSpan);
        performers.appendChild(performer);
    }
    return performers;
}

function makeProgramInfo(song) {
    var container = document.createElement('div');

    var leftSide = document.createElement('div');
    leftSide.className = "left-side";
    var rightSide = document.createElement('div');
    rightSide.className = "right-side";


    var composer = document.createElement('p');
    composer.innerHTML = song.artist;
    leftSide.appendChild(composer);

    var cdates = formatComposerDates(song);
    if (cdates) {
        var date = document.createElement('p');
        date.innerHTML = cdates;
        leftSide.appendChild(date);
    }

    if (song.arrangedBy) {
        var arranger = document.createElement('p');
        arranger.innerHTML = "Arr. " + song.arrangedBy;
        leftSide.appendChild(arranger);
    }

    var title = (song.fullName) ? song.fullName : song.name;
    var songTitle = document.createElement('p');
    songTitle.innerHTML = "<b>" + title + "</b>";

    rightSide.appendChild(songTitle);

    if (song.movements) {
        rightSide.appendChild(formatMovements(song));
    }

    if (song.performers) {
        rightSide.appendChild(formatPerformers(song));
    }


    container.appendChild(leftSide);
    container.appendChild(rightSide);

    //clear 
    document.querySelector('.program-info-popup').innerHTML = ""
    document.querySelector('.program-info-popup').appendChild(container);
}





function initialize() {
    generatePlaylistSelect(configuration.playlists);
    updatePlaylist('inaugural');

    Amplitude.init(configuration);
    makeProgramInfo(Amplitude.getActiveSongMetadata());
    generatePlaylistSongSelect('inaugural');
}


setAudioplayerLinks()

