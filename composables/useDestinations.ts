import type { Destination } from "~/types/destination"

export const useDestinations = () => {

  const destinations = ref<Destination[]>([
    {
      id: 1,
      location: "Manggarai Barat",
      title: "Flores Road Trip 3D2N",
      price: "$375",
      duration: "3 Days",
    },
    {
      id: 2,
      location: "Bogor",
      title: "Forrester Glamping Co Bogor",
      price: "$375",
      duration: "1 Days",
    },
    {
      id: 3,
      location: "Jakarta",
      title: "Paket Tiket Pesawat",
      price: "$375",
      duration: "5 Days",
    },
    {
      id: 4,
      location: "Kota Semarang",
      title: "Desa Wisata Kandri",
      price: "$375",
      duration: "14 Days",
    },
  ])

  return {
    destinations,
  }
}
