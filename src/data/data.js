
const AIRBNB = "https://www.airbnb.de/rooms/267951?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-07-30&check_out=2023-08-04&federated_search_id=ef7ac761-8ee3-437d-ba0e-02b9eaada7c8&source_impression_id=p3_1683204831_lmxtMCzJF6dLWSdK";
const WHATSAPP = 'https://wa.me/491772995212';
const TRIPADVISOR = 'https://www.tripadvisor.de/VacationRentalReview-g187323-d11795049-Stylish_apartment_in_a_nice_area-Berlin.html'


export const arrayImages = [
    '/franks-1', 
    '/franks-16', 
    '/franks-9', 
    '/franks-10',
    '/franks-15',
    '/franks-11', 
    '/franks-14', 
    '/franks-12', 
    '/franks-7',    
    '/franks-6', 
     '/franks-3', 
    '/franks-4', 
    
];

export const heroContent = {
    de: {
        title: `Dein <span>Zuhause</span> in unserem Kiez!`,
        subtitle: null,
        button: 'Verfügbarkeit prüfen',
        bookingInfo: {
          heading: 'Möchten Sie unsere Wohnung reservieren?',
          secondHeading: 'Sie können dies auf folgende Weise tun:',
          arte: [
             {icon: '/whatsapp_icon.png', text: 'whatsapp', description: 'empfehlenswert' ,link: WHATSAPP},
          ]
        }
    },
    en: {
            title: `Your <span>Home</span> in our Kiez!`,
            button: 'Check Availability',
            linkButton: "https://www.airbnb.de/rooms/267951?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2023-07-30&check_out=2023-08-04&federated_search_id=ef7ac761-8ee3-437d-ba0e-02b9eaada7c8&source_impression_id=p3_1683204831_lmxtMCzJF6dLWSdK",
            bookingInfo: {
              heading: 'Would you like to reserve our apartment?',
              secondHeading: 'You can do it through the following means:',
              arte: [
                {icon: '/whatsapp_icon.png', text: 'whatsapp', description: 'Most recommendable',link: WHATSAPP},
             ]
            }
    }



  }

export const descriptionContent = {
    de: {
        heading: `Willkommen bei franks apartment in <span>Prenzlauer Berg.</span>`,

        description: `Auf <strong>70m²</strong> findet Ihr ausreichend Platz für bis zu vier Personen. Das liebevoll eingerichtete Apartment ist komplett für Selbstversorger ausgestattet und hat allen Komfort.`,

        button: `Jetzt buchen!`,
    },

    en: {
        heading: `Welcome to franks Apartment in <span>Prenzlauer Berg.</span>`,

        description: ` On <strong>70m²</strong> you will find enough space for up to four people. The lovingly furnished flat is fully equipped for self-catering and has all the comforts.`,
        
        button: `Book Now!`,
    }
}

export const footerContent = {
    de: `franks apartment | whatsApp: +49 (0) 177 299 5212 | e-Mail: info@franksberlin.com | <a href='/de/anfahrt'>Anfahrt</a> | <a href='/de/impressum'>Impressum</a>`,

    en:`franks apartment  | whatsApp: +49 (0) 177 299 5212 | e-Mail: info@franksberlin.com | <a href='/en/anfahrt'>Directions</a> | <a href='/en/impressum'>Imprint</a>`,
}

export const apartmentContent = [
    {

    de: {
        name: 'Wohnräume', 
        subname: 'Wohnzimmer | Schlafzimmer',
        description: `Die hohen Stuckdecken und gepflegten Holzfußböden in den Wohn- und Schlafräumen sorgen für eine freundliche Atmosphäre und sind mit einer weiten Flügeltür verbunden.
        Neben dem komfortablen Doppelbett im Schlafzimmer steht Euch ein bequemes Schlafsofa für zwei Personen im Wohnzimmer zur Verfügung.`, 
        
        images: ['/franks-1.jpg', '/franks-9.jpg', '/franks-16.jpg', '/franks-11.jpg', '/franks-14.jpg', 
        '/franks-13.jpg' ] 
    },
    en: {

        name:'Living Rooms',
        subname: 'Parlour | Bedroom',
        description: "The high stucco ceilings and well-maintained wooden floor in the living room and bedroom provide a friendly atmosphere and are connected with wide double wing doors. Bed sheets are provided.",
        images: ['/franks-1.jpg', '/franks-9.jpg', '/franks-16.jpg' , '/franks-11.jpg', '/franks-14.jpg', 
        '/franks-13.jpg' ] 
    }
    },
    {
    
    de: {
        name: 'Küche', 
        description: 'Die Küche mit Spüle, Herd, Geschirrspüler und Kühlschrank ist komplett für Selbstversorger ausgestattet. <br/> Die Basics Kaffee,Tee, Kakao, Müsli und Gewürze sind inklusive.', 
        
        images: ['/franks-7.jpg', '/franks-6.jpg', '/franks-5.jpg'] 
    },
    en: {
        name: 'Kitchen', 
        description: 'The kitchen, with sink, gas stovetop, electric oven and refrigerator, is completely furnished for self-catering. The basics coffee, tea, cocoa, muesli and spices are provided.', 
        
        images: ['/franks-7.jpg', '/franks-6.jpg', '/franks-5.jpg'] 
    },

    },
    {
        de: {
            name: 'Bad', 
            description: 'Das moderne Bad ist neu gefliest und mit Dusche, WC und Waschmaschine ausgestattet. Handtücher liegen für Euch bereit.',  
            images: ['/franks-2.jpg','/franks-3.jpg', '/franks-4.jpg'],

        },
        en: {
            name: "Bathroom",
            description: "The modern bathroom is newly tiled and equipped with shower, toilet and washing machine. Towels are provided for you.",
            images: ['/franks-2.jpg','/franks-3.jpg', '/franks-4.jpg'],
        },
    },
 ]


export const ContactContent = {
    de: {
        heading: 'Kontakt',
        adresse: 'Adresse',
        Telefon: 'whatsApp',
        MobilInfo: `+49 (0) 177 299 5212`,
        emailHeading: 'Email',
        email:  'info@franksberlin.com'

    },
    en: {
        heading: 'Contact',
        adresse: 'Address',
        Telefon: 'whatsApp',   
        MobilInfo: "+49 (0) 177 299 5212",
        emailHeading: 'Email',
        email: 'info@franksberlin.com',

    }
}

export const AnfahrtContent = {
    de: {
        title: 'Anfahrt',
        content : `franks apartment liegt im Herzen Berlins, im Bezirk Prenzlauer Berg am Helmholtzplatz.
        Dunckerstrasse 80A, 10437 Berlin. <br/> U-Bhf. Eberswalder Strasse (Linie U2) und
        S-Bhf. Prenzlauer Allee (Linie S8, S9, S41 und S42 Ring) sind in wenigen Minuten zu Fuß erreichbar. <br/> Metro-Tram M10 Husemannstrasse und Metro-Tram M2 Fröbelstrasse liegen fast vor der Tür. 
        <br/>
        <br/>
        Hauptbahnhof: 
        <br/>
        Metro-Tram M10 -> Husemannstrasse Flughafen Schönefeld SXF/BER: S9. Schönefeld -> S-Bhf. Prenzlauer Allee 
        <br/>
        Weitere Infos über den öffentlichen Personennahverkehr in Berlin findest Du unter
        <br/>
        www.bvg.de.
        
        `,
    },
    en: {
        title: 'Directions',
        content: `Welcome to franks apartment located in the colorful and cosmopolitan neighborhood of Prenzlauer Berg. <br/>
        With 70m² you'll find plenty of space for up to four people. The caringly decorated apartment is completely furnished for the self-caterer and has all possible conveniences. <br/>
        For your well-being Frank offers massages right next door in his studio, Massage Deluxe. <br/>
        We are looking forward to your visit!`,
    }
}

export const ImpressumContent = {
    de: {
        title: 'Impressum',
        content : `

            Haftungshinweis: <br/>
            Ich übernehme keine Haftung für Inhalte externer Links. Die Betreiber, der hier verlinkten Seiten, sind ausschließlich für deren Inhalte verantwortlich.
            <br/>

            Gewerbliche Schutzrechte: <br/>
            Alle innerhalb dieser Website genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten des jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch rechte Dritter geschützt sind.
            <br/>
          

            Weitergabe personenbezogener Informationen an Dritte: <br/> 
            Ihre personenbezogenen Daten werden im Falle einer Auftragsbearbeitung nur innerhalb der von Herrn Frank Hüllmandel sowie der verbundenen Unternehmen verwendet und nicht ohne Ihr ausdrückliches Einverständnis an Dritte weitergegeben.
            <br/>

            Disclaimer: <br/>
            Verantwortlich für den Inhalt dieser Website ist Frank Hüllmandel. Betreiber und Inhaber ist
            Frank Hüllmandel.
            Dunckerstrasse 80a
            10437 Berlin - Prenzlauer Berg
            <br/>
            <br/>
            Herr Frank Hüllmandel aktualisiert und prüft die Informationen (Bilder, Texte) auf der Webseite ständig. Eine Haftung oder Garantie für die Richtigkeit, Aktualität, und Vollständigkeit der Informationen auf www.franksberlin.com kann nicht übernommen werden. Gleiches gilt auch für alle anderen Websites, auf die mittels Hyperlink verwiesen wird. Herr Frank Hüllmandel ist für den Inhalt der Websites, die aufgrund einer solchen Verbindung erreicht werden, nicht verantwortlich. Des weiteren behalten wir uns das Recht vor, Ergänzungen oder Änderungen der bereitgestellten Informationen vorzunehmen. Inhalt, Struktur und Ergänzungen der Website sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Bildmaterial, Texten oder Textteilen bedarf der vorherigen schriftlichen Zustimmung von Herrn Frank Hüllmandel. Alle Marken- und Produktnamen sind Marken oder eingetragene Marken der jeweiligen Markeninhaber.
            <br/><br/>

            Hinweise zum Datenschutz: <br/>
            Die von Ihnen angegebene E-Mail-Adresse wird nur zu dem Zweck gespeichert und verwendet, Ihnen Informationen zu Neuerungen, Aktionen und Extrasleistungen rund um www.franksberlin.com zu senden. Ich werde die gespeicherten E-Mail-Adressen vertraulich behandeln. Wenn Sie möchten, können Sie zusätzlich Ihren Namen angeben, um zukünftig individuell gestaltete Newsletter zu erhalten. Selbstverständlich werde ich auch Ihren Namen vertraulich behandeln.
            <br/> <br/>
            Hinweise zum Copyright: <br/>
            Sie dürfen nicht kopiert und/oder für kommerzielle Zwecke (komplett oder zum Teil) verwendet werden. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Bildmaterial, Texten oder Textteilen bedarf der vorherigen schriftlichen Zustimmung von Herrn Frank Hüllmandel. Verstöße gegen dieses Copyright werden strafrechtlich verfolgt. Gerichtsstand ist Berlin - Deutschland. Alle Marken- und Produktnamen sind Marken oder eingetragene Marken der jeweiligen Markeninhaber.
            <br/>


        `,
    },
    en: {
        title: 'Imprint',
        content: `Welcome to franks apartment located in the colorful and cosmopolitan neighborhood of Prenzlauer Berg. <br/>
        With 70m² you'll find plenty of space for up to four people. The caringly decorated apartment is completely furnished for the self-caterer and has all possible conveniences. <br/>
        For your well-being Frank offers massages right next door in his studio, Massage Deluxe. <br/>
        We are looking forward to your visit!`,
    }
}

export const PrenzlauerContent = {
    de: {
        intro: 'Unser Apartment befindet sich im attraktiven Bezirk Prenzlauer Berg im Ostteil der Stadt unweit des Helmholtzplatzes, welcher durch die schönen Cafes, Restaurants und individuellen Shops ein beliebter Treffpunkt für Studenten, Künstler und junge Familien ist.',
        heading: 'Unsere Empfehlungen'
    },
    en: {
        intro: 'Our apartment is located in the attractive district of Prenzlauer Berg in the eastern part of the city, not far from Helmholtzplatz, which is a popular meeting place for students, artists and young families thanks to its beautiful cafes, restaurants and individual shops.',
        heading: 'Our recommendations'
    }
}

export const imagesPrenzlauerBerg = ['franks-16', 'franks-17', 'franks-18', 'franks-19'];

export const recommendationsPrenzlauerBerg = [
    {name: 'Mamida', icon: '/pizza.png', link: 'https://www.google.com/search?q=namida+prenzlauer+berg&oq=namida+prenzlauer+berg&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIRCAEQLhgNGBMYrwEYxwEYgAQyCggCEAAYhgMYigUyCggDEAAYhgMYigUyCggEEAAYhgMYigXSAQg1MTY4ajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#rlimm=12812666061261902094'},
	{name: 'NEO 1', icon: '/meal.png', link: 'https://www.google.com/search?q=neo+prenzlauer+berg&sca_esv=569142147&sxsrf=AM9HkKlnz4NplXGA9J_w1czlTUnsiFivGQ%3A1695905360535&ei=UHYVZbrYH87TkwWTpYmYAQ&oq=neo&gs_lp=Egxnd3Mtd2l6LXNlcnAiA25lbyoCCAAyBxAjGIoFGCcyBxAjGIoFGCcyBxAjGIoFGCcyDRAuGIoFGMcBGK8BGEMyCxAAGIAEGLEDGIMBMggQABiABBixAzIJEAAYigUYChhDMgsQLhiABBjHARivATIFEC4YgAQyCBAuGIAEGLEDSJ83UPYrWL8tcAN4AZABAJgBtQGgAaQDqgEDMC4zuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgcQABiKBRhDwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiABBixAxjHARjRA8ICBxAuGIoFGEPCAg0QABiKBRixAxiDARhD4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp#rlimm=16960522655882771145'},
    {name: 'BuKon', icon: '/asian.png', link: 'https://www.google.com/search?q=buKon+prenzlauerberg&sca_esv=569142147&sxsrf=AM9HkKmMGsRYLF4nqX0mb6HjAFOBnmdBuw%3A1695905462363&ei=tnYVZcntFO6Ni-gPsvKaqA8&ved=0ahUKEwjJoJ-VrM2BAxXuxgIHHTK5BvUQ4dUDCBA&uact=5&oq=buKon+prenzlauerberg&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGJ1S29uIHByZW56bGF1ZXJiZXJnMgcQIxiwAhgnSNEMUI8LWI8LcAJ4AZABAJgBVKABVKoBATG4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGAg&sclient=gws-wiz-serp'},
	{name: 'Café Boulangerie', icon: '/cafe.png', link: 'https://www.google.com/search?q=cafe+boulangerie+prenslauer+berg&sca_esv=569142147&sxsrf=AM9HkKlxmTenq8zt_kGmNYSqs307Ynduaw%3A1695905469695&ei=vXYVZf2HKpLtkgWdhaSIAQ&ved=0ahUKEwi92t-YrM2BAxWStqQKHZ0CCREQ4dUDCBA&uact=5&oq=cafe+boulangerie+prenslauer+berg&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGNhZmUgYm91bGFuZ2VyaWUgcHJlbnNsYXVlciBiZXJnMgcQIRigARgKMgcQIRigARgKMggQIRgWGB4YHTIIECEYFhgeGB0yCBAhGBYYHhgdSJJMUNcCWI5LcAV4BJABAJgBlwKgAbUhqgEGMS4yNy4xuAEDyAEA-AEBwgIEEAAYR8ICBxAjGIoFGCfCAgQQIxgnwgIIEAAYgAQYsQPCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIMBGLEDGIoFwgILEC4YgAQYsQMYgwHCAgsQABiKBRixAxiDAcICCxAAGIAEGLEDGIMBwgIJEAAYigUYChhDwgIREC4YgwEYxwEYsQMY0QMYgATCAg4QLhiABBixAxjHARjRA8ICCxAuGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEYrwHCAgsQLhiABBjHARivAcICCBAAGIAEGJIDwgIIEAAYigUYkgPCAggQABiABBjJA8ICBRAAGIAEwgIREC4YigUYsQMYgwEYxwEYrwHCAgsQABjLARiABBjJA8ICDhAuGMsBGIAEGMcBGK8BwgIdEC4YywEYgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgoQLhixAxiABBgKwgILEC4YrwEYxwEYgATCAhkQLhixAxiABBgKGJcFGNwEGN4EGN8E2AEBwgILEAAYigUYkgMYuATCAgoQABiABBiSAxgKwgIOEC4YywEYgAQYxwEY0QPCAggQABjLARiABMICDRAuGIAEGMcBGK8BGArCAhAQLhiABBgUGIcCGMcBGK8BwgIREC4YgwEYrwEYxwEYsQMYgATCAhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAcICChAAGIAEGBQYhwLCAgoQABjLARiABBgKwgINEC4YrwEYxwEYgAQYCsICBxAAGIAEGArCAhoQLhivARjHARiABBiXBRjcBBjeBBjgBNgBAcICEBAuGMsBGIAEGMcBGK8BGArCAggQABgWGB4YCsICBhAAGBYYHsICAhAmwgIFECEYoAHiAwQYACBBiAYBkAYCugYGCAEQARgU&sclient=gws-wiz-serp'},
    {name: 'Bar Krüger', icon: '/bier.png', link: 'https://www.google.com/search?q=bar+krueger+prenzlauer+berg&sca_esv=569142147&sxsrf=AM9HkKkvTTep2ctLiCfmiRoHxYcXvhNEfg%3A1695905511208&ei=53YVZf6iDIadkgWl_6agBQ&oq=bar+krueger+pre&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2JhciBrcnVlZ2VyIHByZSoCCAAyBRAhGKABMgUQIRigATIEECEYFUj6IVDiB1jvGnAAeAWQAQCYAZcBoAGvC6oBBDAuMTK4AQPIAQD4AQHCAgQQABhHwgIEECMYJ8ICBxAjGIoFGCfCAgcQABiKBRhDwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICBRAuGIAEwgIIEC4YsQMYgATCAgsQLhiABBixAxiDAcICCxAAGIoFGLEDGIMBwgILEC4YigUYsQMYgwHCAg0QLhiKBRjHARivARgnwgINEC4YigUYxwEYrwEYQ8ICBRAAGIAEwgIIEC4YgAQYsQPCAgsQABiABBixAxiSA8ICCBAAGIAEGJIDwgIOEC4YrwEYxwEYsQMYgATCAgoQABiKBRjJAxhDwgIKEAAYgAQYFBiHAsICERAuGIMBGK8BGMcBGLEDGIAEwgIIEAAYywEYgATCAgsQLhiABBjHARivAcICBxAAGIAEGArCAg4QLhivARjHARjLARiABMICBxAAGA0YgATCAgkQABgNGIAEGArCAg0QLhgNGIAEGMcBGK8BwgIIEAAYFhgeGArCAgYQABgWGB7CAgIQJuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp'},
	{name: 'Wohnzimmerbar', icon: '/martini.png', link: 'https://www.google.com/search?q=wohnzimmer+prenzlauer+berg&sca_esv=569142147&sxsrf=AM9HkKnuVNDrItDW7Tzdc2SXmTKTQMFldw%3A1695905533176&ei=_XYVZZaoCu6ui-gPpbKMyA8&gs_ssp=eJzj4tZP1zcsyS0oiS82MmC0UjWoMDFPtDBJSUuzMDU2TEmyNLQyqEhJNLU0NjMxNDVOtUxMNE70kirPz8iryszNTS1SKChKzavKSSwFMpNSi9IBxfgZkQ&oq=wohnzimmer+pren&gs_lp=Egxnd3Mtd2l6LXNlcnAiD3dvaG56aW1tZXIgcHJlbioCCAAyCxAuGIAEGMcBGK8BMgYQABgWGB4yAhAmMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUijJVDEBljiH3ADeACQAQCYAZEBoAGMDqoBBDAuMTW4AQPIAQD4AQHCAggQABiiBBiwA8ICBBAjGCfCAgcQIxiKBRgnwgILEAAYgAQYsQMYgwHCAgUQABiABMICBxAAGIoFGEPCAg0QLhiKBRjHARivARhDwgINEC4YigUYsQMYgwEYQ8ICBxAuGIoFGEPCAg0QLhivARjHARiKBRhDwgINEAAYigUYsQMYgwEYQ8ICCxAAGIAEGJIDGLgEwgIIEAAYgAQYsQPCAgcQIxixAhgnwgIKEAAYgAQYsQMYCsICDRAAGIAEGLEDGIMBGArCAg0QABiABBixAxixAxgKwgIHEAAYgAQYCsICHBAuGK8BGMcBGIoFGEMYlwUY3AQY3gQY4ATYAQHCAhwQLhiKBRjHARivARhDGJcFGNwEGN4EGOAE2AEBwgIQEC4YgAQYFBiHAhjHARivAcICDRAuGIAEGMcBGK8BGArCAh8QLhiABBgUGIcCGMcBGK8BGJcFGNwEGN4EGOAE2AEBwgIIEAAYFhgeGAriAwQYASBBiAYBkAYDugYGCAEQARgU&sclient=gws-wiz-serp'},
    {name: 'Schoemig Porzellan', icon: '/porcelain.png', link: "https://schoemig-porzellan.de/"},
	
]

export const  mapSource = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.4679455149576!2d13.418275076599489!3d52.543059972067226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84dffb0fd53df%3A0xb4f73c7bb736b0da!2sDunckerstra%C3%9Fe%2080A%2C%2010437%20Berlin!5e0!3m2!1sde!2sde!4v1686150226557!5m2!1sde!2sde";  