// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/src/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { pricesIds } = req.body

  if(req.method !== 'POST'){
    return res.status(405).json({ error: 'Method not allowed.' })
  }


  if(!pricesIds){
    return res.status(400).json({ erro: 'Price not found.' })
  }


  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: pricesIds,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })

}
