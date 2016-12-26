const getCurrentUser = (userId) => {
  return fetch(`/register/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => response.json())
};

const createNewUser = (login, mail, pass) => {
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `mail=${mail}&login=${login}&password=${pass}`
  }).then(response => response.json())
};

const verifyUserAuth = (login, pass) => {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `login=${login}&password=${pass}`
  }).then(response => response.json())
};

export {
  getCurrentUser,
  createNewUser,
  verifyUserAuth
}