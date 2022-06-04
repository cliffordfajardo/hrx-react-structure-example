import { rest } from "msw";

const database = [
  {
    id: 0,
    name: "Lawrence",
    title: "Engineer",
  },
  {
    id: 1,
    name: "Lawrence",
    title: "Engineer",
  },
];

export const routeHandlers = [
  rest.get("/users", (req, res, context) => {
    return res(context.status(200), context.json(database));
  }),
  // rest.put("/users:user_id", (req, res, context) => {
  //   const userToUpdate = database.find(user => {
  //     console.log('req')
  //     return user.id === req.id
  //   })

  //   return res(
  //     context.status(200),
  //     context.json([
  //       {
  //       name: "Lawrence",
  //       title: "Engineer",
  //     }])
  //   );
  // }),
];
