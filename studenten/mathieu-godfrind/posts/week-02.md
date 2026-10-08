# Week 2 — Eerst checken, dan inkopen

## Wat bouw ik?
Ik bouw een tool die checkt of een product van Alibaba veilig is om in te kopen en door te verkopen op bol.com. Ik plak de tekst van een productpagina erin, en de tool zegt GO, NO-GO of ONZEKER op basis van vier risico's: namaak, CE en wetgeving, verzending, en verboden op bol.com.

## Waarom een taalmodel?
Een taalmodel past hier, omdat de input tekst is en die tekst heel rommelig is. Alibaba-pagina's zijn soms in drie talen door elkaar geschreven, staan vol dubbele info en gebruiken telkens andere woorden voor hetzelfde. Een vaste regel of Excel kan zoeken op "CE" of "glass", maar begrijpt niet dat "voor AirPods Pro" bij een hoesje oké is en "AirPods style" niet. Een voorspelling uit cijfers heb ik niet nodig, want ik wil niet weten of iets goed gaat verkopen, alleen of er een risico is. Beeldherkenning zou later nuttig zijn, omdat veel info op de foto's staat, maar voor een eerste versie hou ik het bij tekst.

## Eén testinput
Het interessantst vond ik T02, een siliconen hoesje voor AirPods Pro. Mijn antwoord was GO, want het merk staat er alleen om te zeggen waarop het past, het is geen namaak. Maar mijn eigen regel zei dat een merknaam al een risico is. Dus ik heb mijn regel aangepast voor ik de tool liet draaien. Daarna zei de tool twee keer GO. Zo zag ik dat mijn testset ook mijn eigen regels test, niet alleen de AI.
