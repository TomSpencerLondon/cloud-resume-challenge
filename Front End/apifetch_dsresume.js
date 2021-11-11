const countEl = document.getElementById('vc');

updateVisitCount();

function updateVisitCount() {
    fetch(' https://q3x56tmteg.execute-api.eu-west-1.amazonaws.com/Prod/visitor_count')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data;
        })
    }
