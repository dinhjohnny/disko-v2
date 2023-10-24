import SearchTableUsers from './components/SearchTableUsersOverview';
import tableDataUsersOverview from './variables/tableDataUsersOverview.json';
import { columnsDataUsersOverview } from './variables/columnsDataUsersOverview';
import Card from 'components/card';

import { useSelector } from 'react-redux';


const UserOverview = () => {
  const { allUsers } = useSelector((state) => state.allUsers);

  return (
    <Card extra={'w-full h-full mt-3'}>
      <SearchTableUsers
        tableData={allUsers}
        columnsData={columnsDataUsersOverview}
      />
    </Card>
  );
};

export default UserOverview;
