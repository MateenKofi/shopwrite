import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../appRedux/slice/whishlist/wishlistSlice';
import { RootState } from '../appRedux/slice/rootReducer';
import TextGradient from './TextGradient';
import bars from '../assets/bar-1.svg';
import { useTable, Column } from 'react-table';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth } from '../Auth/useAuth';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

interface Item {
  id: number;
  title: string;
  price: number;
}

const Wishlist: React.FC = () => {
  const { user } = useAuth(); // Get the user
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const handleRemoveFromWishlist = (itemId: number) => {
    dispatch(removeFromWishlist(itemId));
    toast.error('Item removed from wishlist');
  };

  const data = React.useMemo(() => wishlist, [wishlist]);

  const columns = React.useMemo<Column<Item>[]>(
    () => [
      {
        Header: 'Title', // Header of the column
        accessor: 'title', // Value accessor
      },
      {
        Header: 'Price', // Header of the column
        accessor: 'price', // Value accessor
      },
      {
        Header: 'Action',
        accessor: 'id',
        Cell: ({ value }: { value: number }) => (
          <button
            onClick={() => handleRemoveFromWishlist(value)}
            className="w-fit flex text-white gap-4 items-center  rounded-md p-2  font-bold mx-auto bg-[#716acd] hover:bg-[#8d98d9] duration-300 transition-all">
            <FontAwesomeIcon
              icon={faHeartBroken}
              className="text-red-900"
            />
            <span>Remove</span>
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="w-full grid place-items-center pt-10 mb-10">
       <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <TextGradient>
        <div className="grid place-items-center my-10">
          <h1 className="text-inherit">Wish List</h1>
          <div>
            <img
              alt="bar"
              loading="lazy"
              width="500"
              height="50"
              decoding="async"
              data-nimg="1"
              className="mt-6"
              src={bars}
            />
          </div>
        </div>
      </TextGradient>
      <div className="w-full grid place-items-center">
        {user ? (
          <>
            {wishlist.length === 0 ? (
              <p className="text-center text-gray-600">There are no items in your wishlist.</p>
            ) : (
              <table
                {...getTableProps()}
                className="w-full ">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      className="border-t-2 text-white border-b-2 bg-[#716acd] hover:bg-[#8d98d9] duration-300 transition-all">
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="">
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="w-full">
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className="">
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="text-center p-4 bg-slate-50">
                            {cell.render('Cell')}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        ) : (
          <div className="grid place-items-center h-64">
            <Link to={'/signin'}>
              <button className="btn bg-[#716acd] hover:bg-[#8d98d9] duration-300 transition-all text-white font-bold text-xl py-2 px-4 rounded-lg">
                Please Log in
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
