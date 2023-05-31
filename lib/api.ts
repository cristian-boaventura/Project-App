const fetcher = async ({ url, method, body, json = true }) => {
    const res = await fetch(url, {
      method,
      // the next line of code will ommit the body field if there's none
      ...(body && {body: JSON.stringify(body)}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("API Error"); 
    }
  
    if (json) {
      const data = await res.json();
      return data.data
    }
  };
  
export const register = async (user) => {
    return fetcher({
      url: "/api/register",
      method: "POST",
      body: user,
    });
  };
  
export const signin = async (user) => {
    return fetcher({
      url: "/api/signin",
      method: "POST",
      body: user,
    });
  };