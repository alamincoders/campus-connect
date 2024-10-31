import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
  return (
    <div>
      <div className="group bg-[#F0F7FF] hover:bg-secondary_main hover:shadow-xl rounded overflow-hidden duration-300 ease-in-out transition-all relative z-0">
        <div className="relative"></div>
        <div className="p-4 lg:p-[30px] space-y-2 relative">
          <h3 className="text-[#141b22] group-hover:text-white text-[28px] leading-none font-semibold truncate">
            <Link to={`/events/${event._id}`}>{event.name}</Link>
          </h3>
          <p className="text-[#777777] group-hover:text-white/70 text-base truncate">
            {event.description}
          </p>

          <p className="text-[#777777] group-hover:text-white/70 text-base">
            <b>Date:</b> {event.date}
          </p>

          <Link
            to={`/events/${event._id}`}
            className="text-primary_main font-medium bg-transparent px-0 py-0.5 inline-block transition-all duration-100 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-transparent to-primary_main bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out inline-flex gap-2 items-center">
              Interested <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard