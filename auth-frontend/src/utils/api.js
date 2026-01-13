const API_BASE = "http://localhost:5000/api";

export async function startAuth(payload){
    const res = await fetch(`${API_BASE}/aut/start`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    if(!res.ok){
        const err = await res.json();//reading backend error message
        throw new Error(err.message || "Something went wrong");//js error, tops fnc execution
    }
    return res.json();
}

//payload: data sent from frontend
//fetch: built in browser function make http req