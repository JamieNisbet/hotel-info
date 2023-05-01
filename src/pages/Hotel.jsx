import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const collections = [
  {
    id: 4,
    name: 'Rooms',
    href: '#',
    infos: 'All Rooms and Clubhouse facilities are non-smoking areas.Please keep windows closed when it’s raining.If you encounter any problem during your stay or if you find any room objects broken or damaged, please inform the Reception. In-room amenities, Tea and coffee are available free of charge.',
    imageSrc: '/img/In-room-amenities.png',
    imageAlt: 'In-room-amenities',
  },
  {
    id: 5,
    name: 'Room Plan',
    infos: 'The hotel rooms are located in the building on the left of the reception entrance, except for the rooms 20 to 28 which are located in the main building. There are four entrances, accessible from the courtyard',
    imageSrc: '/img/hotel-room-Pierpont.png',
    imageAlt: 'hotel-room-Pierpont.',
    },
    {
      id: 1,
      name: 'Reception & Parking',
      infos: 'The Reception is open between 08:00 and 18:00. Outside these hours, please address the staff in the Bar & Restaurant. The Club’s parking is free of charge.',
      imageSrc: '/img/reception.png',
    imageAlt: 'reception',
  },
  {
    id: 3,
    name: 'How and Where to Pay?',
    infos: 'Your room (incl. breakfast, shop and golf: please pay at the Reception.If you check out before the Reception is open, please pay the day before. Bar & Restaurant: please pay at the Bar.',
    imageSrc: '/img/reception.png',
    imageAlt: 'reception',
  },
    
  {
    id: 6,
    name: 'Check out',
    infos: 'Please check-out before 10:30. If you plan to leave later in the day, we can provide you with a place to store your luggage and golf clubs.If you are playing golf on your final day you must check-out before you tee-off. You are welcome to use the Club’s changing rooms after your round of golf to shower and change. Please bring the room key back to the Reception at the end of your stay.',
    imageSrc: '/img/Check-out.png',
    imageAlt: 'Check-out.',
    },
  {
      id: 2,
      name: 'Office',
      infos: 'You can leave your outgoing mail in the Mailbox at the Reception. If you would like to send a fax, please ask the Reception.',
      imageSrc: '/img/office.jpg',
      imageAlt: 'reception',
  },



      {
      id: 7,
      name: 'Emergency numbers',
        infos: "Emergency general 112\nFire 100\nPolice 101\nAmbulance 100\nOffice +32 471 88 08 38, \nDo not hesitate to contact our staff if you have a request or any question. We wish you a pleasant stay in our hotel!",
      imageSrc: '/img/emergency_numbers.jpg',
      imageAlt: 'Emergency-numbers.',
      },
]
  
export default function Hotel() {
  const phoneNumber = '071880830';

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00612e] to-[#00612e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Hotel</h2>
          <a href={`tel:${phoneNumber}`}>
          <svg fill="none" className='h-10 w-10 rounded-lg m-auto hover:text-white hover:scale-125 hover:cursor-pointer' stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
    </a>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
            {collections.map((product) => (
              <a key={product.id} href={product.imageSrc} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-md font-medium text-gray-900" style={{whiteSpace: "pre-wrap"}}>{product.infos}</p>
              </a>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00612e] to-[#00612e] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
