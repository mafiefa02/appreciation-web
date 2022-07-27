// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
