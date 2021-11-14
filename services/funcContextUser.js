import { parseCookies, setCookie } from 'nookies';

export async function dadosUser() {

    const { MQtoken } = parseCookies()

    try {
        const res = await fetch('http://localhost:8080/Usuarios/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MQtoken}` }
        });

        const response = await res.json();

        return response

    } catch (err) {

    }


}


export async function dadosQuest(id_quest) {

    const { MQtoken } = parseCookies()

    try {
        
        const res = await fetch(`http://localhost:8080/CreateQuest/QuestId/${id_quest}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${MQtoken}` }
        });
        var data_return = await res.json();
        
        const response = data_return.Query_result
        setCookie(null, 'Quest', JSON.stringify(response[0]), {
            maxAge: 60 * 60 * 24,
            path: '/'
          });
    } catch (err) {
        console.log(err)
    }


}


