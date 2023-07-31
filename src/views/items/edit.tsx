import React from 'react';
import { MockItems } from 'mockdata';
import { Item } from '@/views/items/list/WithItems';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [item, setItem] = React.useState<Item | null>(null);
  const routeItem = state?.item;

  React.useEffect(() => {
    (() => {
      if (routeItem) {
        return setItem(routeItem);
      }

      if (id) {
        const foundItem = MockItems.find((elm) => elm.id === parseInt(id, 10));
        if (foundItem) {
          return setItem(foundItem);
        }
      }

      return navigate('/items');
    })();
  }, [id, navigate, routeItem]);

  return <div>edit {item?.name}</div>;
}

export default EditItem;
