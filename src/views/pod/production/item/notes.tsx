import React from 'react';
import { PodMockProdLine } from 'mockdata';
import ItemsLayout from '@/components/pod/item/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import PaProductionItemNotesContent from '@/components/pod/item/notes';

function PaProductionItemNotes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = React.useState<any>({});

  React.useEffect(() => {
    (() => {
      if (id) {
        const foundItem = PodMockProdLine.find((elm) => elm.id === id);
        if (foundItem) {
          return setItem(foundItem);
        }
      }

      return navigate('/app/items');
    })();
  }, [id, navigate, setItem]);

  return (
    <ItemsLayout item={item}>
      <PaProductionItemNotesContent item={item} />
    </ItemsLayout>
  );
}

export default PaProductionItemNotes;
