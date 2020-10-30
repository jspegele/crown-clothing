import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HerbGAMgy3i1pbJQoe687wF67yzBPUEr7xd1VJJpuqlWYbb97V18MqIAdQlPJGHc2xlA2ior46Xhj9FBtxwt2ve00LBCSnqC6'
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert('There was an issue with your payment. Please make sure you use the provided credit card info.')
    })
  }
  
  return (
    <StripeCheckout
      label='Pay Now'
      panelLabel='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
 
export default StripeCheckoutButton
