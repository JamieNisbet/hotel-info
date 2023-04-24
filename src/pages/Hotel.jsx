import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const collections = [
    {
      id: 1,
      name: 'Opening Hours',
      href: '#',
      Infos: 'The Reception is open between 08:00 and 18:00 during the high season and 09.00 and 17.00 during the low season. Outside these hours, please address the staff in the Bar & Restaurant. Parking, The Club’s parking is free of charge. Mail, You can leave your outgoing mail in the Mailbox at the Reception. Fax, If you would like to send a fax, please ask the Reception. Where to pay? Room (incl. breakfast), Shop and Golf: please pay at the Reception.If you check out before the Reception is open, please pay the day before. Bar & Restaurant: please pay at the Bar.',
      imageSrc: '/img/reception.png',
      imageAlt: 'reception',
      },
      {
      id: 2,
      name: 'Rooms',
      href: '#',
      Infos: 'All Rooms and Clubhouse facilities are non-smoking areas.Please keep windows closed when it’s raining.If you encounter any problem during your stay or if you find any room objects broken or damaged, please inform the Reception. In-room amenities, Tea and coffee are available free of charge.',
      imageSrc: '/img/In-room-amenities.png',
      imageAlt: 'In-room-amenities',
      },
      {
      id: 3,
      name: 'Room Plan',
      href: '#',
      Infos: 'The hotel rooms are located in the building on the left of the reception entrance, except for the rooms 20 to 28 which are located in the main building. There are four entrances, accessible from the courtyard and the floor',
      imageSrc: '/img/hotel-room-Pierpont.png',
      imageAlt: 'hotel-room-Pierpont.',
      },
      {
      id: 4,
      name: 'Check out',
      href: '#',
      Infos: 'Please check-out before 10:30. If you plan to leave later in the day, we can provide you with a place to store your luggage and golf clubs.If you are playing golf on your final day you must check-out before you tee- off. You are welcome to use the Club’s changing rooms after your round of golf to shower and change. Please bring the room key back to the Reception at the end of your stay.',
      imageSrc: '/img/Check-out.png',
      imageAlt: 'Check-out.',
      },
      {
      id: 5,
      name: 'Emergency numbers',
      href: '#',
      Infos: 'Emergency general 112, Fire 100 Police 101 Ambulance 100 Office (during closing hours) 0032 (0)474 98 06 63, Do not hesitate to contact our staff if you have a request or any question. We wish you a pleasant stay in our hotel!',
      imageSrc: '/img/Emergency-numbers.png',
      imageAlt: 'Emergency-numbers.',
      },
]
  
export default function Hotel() {

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
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
            {collections.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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
