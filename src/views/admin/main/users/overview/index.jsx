import SearchTableUsers from './components/SearchTableUsersOverview';
import tableDataUsersOverview from './variables/tableDataUsersOverview.json';
import { columnsDataUsersOverview } from './variables/columnsDataUsersOverview';
import Card from 'components/card';
import { useSelector } from 'react-redux';


const UserOverview = () => {
  const transformUserData = (allUsers) => {
    return allUsers.map(user => ({
      name: [user.fullName, user.profilePic, user.userID],
      email: user.email,
      date: 'Unknown Date', // Replace with actual date field if available
      major: user.major || 'Member', // fallback to 'Member' if major is not available
      actions: 'Actions', // replace with actual actions if available
      linkedIn: user.linkedIn
    }));
  };
  const { allUsers } = useSelector((state) => state.allUsers);
  
  console.log(allUsers)
  const transformedData = transformUserData(allUsers);


  return (
    <Card extra={'w-full h-full mt-3'}>
      <SearchTableUsers
        tableData={transformedData}
        columnsData={columnsDataUsersOverview}
      />
    </Card>
  );
};

export default UserOverview;
