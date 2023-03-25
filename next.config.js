/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['links.papareact.com']
  },
  
  env: {
    mapbox_key: 'pk.eyJ1IjoiZG1hc3Rlcm1pbmQiLCJhIjoiY2xmbjd0eHF5MGpuMTNycDYzZnZvY2NsNCJ9.vSsm8I_l-DQNPh0Q-vS0dQ'
  }

}