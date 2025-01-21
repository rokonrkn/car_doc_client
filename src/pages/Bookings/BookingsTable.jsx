
const BookingsTable = ({ booking }) => {

    const { _id, date, title, price, img } = booking;
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={img}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="text-sm opacity-50">{title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {date}
                </td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default BookingsTable;