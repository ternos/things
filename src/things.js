curl -v -XPOST https://api.airtable.com/v0/appnK1AipmhcPRwtF/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%8B \
  -H "Authorization: Bearer keyBo7yFSJXZHDPv0" \
  -H "Content-Type: application/json" \
  --data '{
  "fields": {
    "Name": "Лексус",
    "Сегменты": [
      "receAdEAJyNSUEZ1k"
    ],
    "РА": [
      "recVXjMgLrWsfrCtM"
    ]
  }
}'

const body = {
    "fields": {
        "Name":"alfred.repair",
        "Tags":[],
        "Phone":["7 (495) 230-16-05","7 (495) 230-16-06"],
        "Mail":["mail@alfred.repair",
        "maLl@alfred.repair"],
        "RA":[""],
        "Web":[""],
        "Contacts":[
            {
                "Name":"Игорь Назимко",
                "Phone":["7 999 999 29 05","7 999 999 99 99"],
                "Mail":["igor@alfred.repair"],
                "Position":"Commercial and Marketing Lead",
                "Brand":""
            },
            {
                "Name":"Григорий Дудаш",
                "Phone":["7 (495) 230-16-05"],
                "Mail":["gregor@alfred.repair"],
                "Position":"CMO","Brand":"Alfred"
            }
        ]
    }
  }

  curl "https://api.airtable.com/v0/appYrbaVIKW8Z5iFj/Table%201?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer keywmD4oq9piAeysC"


const xhr = new XMLHttpRequest();
const api = 'keywmD4oq9piAeysC'
const url = 'https://api.airtable.com/v0/appYrbaVIKW8Z5iFj/Table%201?maxRecords=3&view=Grid%20view'
xhr.open('GET', url, false);
xhr.setRequestHeader('Authorization', 'Bearer ' + api);
// xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send()

// let body = {
//   "fields": {
//     "Name":"simulator.gopractice.ru",
//     "Tags":["образование"],
//     "Phone":[""],
//     "Mail":[""],
//     "RA":[""],
//     "Web":["https://simulator.gopractice.ru/"],
//     "Contacts":[{
//       "Name":"Ксиния",
//       "Phone":[""],
//       "Mail":["sales@gopractice.ru"],
//       "Position":"",
//       "Brand":""}]
//     },
//     "typecast": true
// }

let jso = JSON.stringify(body)
console.log(jso)
xhr.send(jso);

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}