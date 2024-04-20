import mateen from '../assets/membersImages/mateen.jpeg'
import richard from '../assets/membersImages/richard.jpeg'
import evans from '../assets/membersImages/evans.jpeg'
import kessie from '../assets/membersImages/kessie.jpeg'
import senior from '../assets/membersImages/senior.jpeg'
import junior from '../assets/membersImages/Junior.jpeg'
import ama from '../assets/membersImages/ama.jpeg'
import andrew from '../assets/membersImages/andrew.jpeg'

const Table = () => {
  return (
    <div className='w-5/6 bg-slate-100 my-10 rounded-lg'>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Index Numbers</th>
        <th>Gender</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={mateen} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">Abdul Mateen Kofi Yeboah</div>
            </div>
          </div>
        </td>
        <td>
          5211040236
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={senior} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">Amponsah Danquah Senior</div>
              
            </div>
          </div>
        </td>
        <td>
          5211040239
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={junior} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">Amponsah Danquah Junior</div>
              
            </div>
          </div>
        </td>
        <td>
          5211040240
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={kessie} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">Kessie Patrick Atta</div>
              
            </div>
          </div>
        </td>
        <td>
          5211040233
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 5 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={evans} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Mensah Evans</div>
              
            </div>
          </div>
        </td>
        <td>
          5211040232
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 6 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">Boadu Kinsford</div>
              
            </div>
          </div>
        </td>
        <td>
          5211040234
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 7 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={richard}alt="Richard" />
              </div>
            </div>
            <div>
              <div className="font-bold">Richard Osei</div>
              
            </div>
          </div>
        </td>
        <td>
          5211040235
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
       {/* row 8 */}
       <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={ama}alt="Avator" />
              </div>
            </div>
            <div>
              <div className="font-bold">Gyamfuo Amoni</div>
              
            </div>
          </div>
        </td>
        <td>
        5211040231
        </td>
        <td>Female</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
       {/* row 9 */}
       <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src='' alt="Avator" />
              </div>
            </div>
            <div>
              <div className="font-bold ">Aidoo Addison Joseph</div>
              
            </div>
          </div>
        </td>
        <td>
        5211040237
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 10 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={andrew} alt="Avator" />
              </div>
            </div>
            <div>
              <div className="font-bold ">Fosu Konadu Andrews</div>
              
            </div>
          </div>
        </td>
        <td>
        5211040238
        </td>
        <td>Male</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Index Number</th>
        <th>Gender</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
  )
}

export default Table