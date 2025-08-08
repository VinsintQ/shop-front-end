

const BACKEND_URL = "http://localhost:3000"



const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
    if (json.token) {
      localStorage.setItem("token", json.token);
    }
    const user = parseToken(json.token);
    return { user };
  } catch (err) {
    console.log(err);
    throw err;
  }
};



export default {signup}