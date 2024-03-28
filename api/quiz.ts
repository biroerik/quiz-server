import type { VercelRequest, VercelResponse } from "@vercel/node";

const quiz: { question: string; answer: boolean }[] = [
  {
    question: "Bayern München is the best team in the world",
    answer: true,
  },
  {
    question: "Bayern has the most Champions League titles",
    answer: false,
  },
  {
    question: "Bayern has the most Bundesliga titles",
    answer: true,
  },
  {
    question: "Thomas Mülles has the most caps for Bayern",
    answer: false,
  },
  {
    question: "Robert Lewandowski scored the most goals for Bayern",
    answer: false,
  },
  {
    question: "Bayern was foundeded in 1900",
    answer: true,
  },
  {
    question:
      "Bayern is the only club who won the Champions League 3 times in a row",
    answer: false,
  },
  {
    question: "Bayern achived the treble one time",
    answer: false,
  },
  {
    question: "Bayern home stadium's name is the Allianz Arena",
    answer: true,
  },
  {
    question:
      "In the 2013 Champions League final the winning goal was scored by Arjen Robben",
    answer: true,
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  return res.json(quiz);
}
