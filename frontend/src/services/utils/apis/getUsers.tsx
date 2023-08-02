import axios from "axios";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_APIS}/users`
    );
    return data.users;
  } catch (err) {
    console.log(err);
  }
};
