/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { ProdobitAppTheme as t } from '@/theme';
import { Box, Button, Menu, Text, TextInput } from '@mantine/core';

import {
  useSensor,
  useSensors,
  DndContext,
  DragEndEvent,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
} from '@dnd-kit/core';

import {
  arrayMove,
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {
  TrashIcon,
  CustomPlusIcon,
  CustomSortThreeLine,
  CustomSmoothTooltipIllustration,
} from '@/components/icons';

function TemplateMenu<T extends { id: number; name: string }>({
  state,
  setState,
}: {
  state: T[];
  setState: React.Dispatch<React.SetStateAction<T[]>>;
}) {
  function SortableItem({ id, children }: { id: number; children: React.ReactNode }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
      id,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <Box component="li" ref={setNodeRef} style={style}>
        <CustomSortThreeLine {...attributes} {...listeners} />
        {children}
      </Box>
    );
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setState((old: any[]) => {
        const oldIndex = old.findIndex((item) => item.id === active.id);
        const newIndex = old.findIndex((item) => item.id === over?.id);

        return arrayMove(old, oldIndex, newIndex);
      });
    }
  };

  return (
    <Menu.Dropdown
      sx={{
        gap: 10,
        padding: 0,
        marginLeft: -30,
        width: 'auto',
        maxWidth: 417,
        border: 'none',
        display: 'flex',
        borderRadius: 20,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <CustomSmoothTooltipIllustration
        width={30}
        height={100}
        style={{
          right: '0',
          top: '50%',
          zIndex: 9999,
          color: '#fff',
          position: 'absolute',
          transform: 'translateY(-50%) translateX(100%) rotate(180deg)',
        }}
      />
      <Box
        sx={{
          gap: 10,
          width: '90vw',
          maxWidth: 417,
          display: 'flex',
          borderRadius: 20,
          padding: '30px 36px',
          alignItems: 'stretch',
          flexDirection: 'column',
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '> button': {
            width: '100%',
            border: 'none',
            height: 'auto',
            padding: '20px 16px',
            backgroundColor: 'transparent!important',
            '> div > span': {
              gap: 5,
              color: '#000',
              width: '100%',
              display: 'flex',
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '18px',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',

              '> svg': {
                width: 24,
                height: 24,
              },
            },
          },
        }}
      >
        <Box
          component="ul"
          sx={{
            gap: 10,
            margin: 0,
            padding: 10,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            listStyle: 'none',
            '> li': {
              gap: 14,
              padding: 20,
              width: '100%',
              display: 'flex',
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: t.colors.gray[1],
              '> svg': {
                width: 24,
                height: 24,
                cursor: 'grab',
                color: t.colors.gray[4],
                outline: 'none',
                ':active': {
                  cursor: 'grabbing',
                },
              },
              '.mantine-TextInput-input': {
                padding: 0,
                width: '100%',
                border: 'none',
                backgroundColor: 'transparent',
              },
              '> button': {
                padding: 0,
                color: '#000',
                border: 'none',
                height: 'auto',
                backgroundColor: 'transparent!important',
                '> div > span > svg': {
                  width: 24,
                  height: 24,
                },
              },
            },
          }}
        >
          <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
          >
            <SortableContext
              items={state.map((item: any) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {state.map((item) => (
                <SortableItem id={item.id} key={`sr-st3-0-${item?.id}`}>
                  <TextInput defaultValue={item?.name} />
                  <Button variant="default">
                    <TrashIcon />
                  </Button>
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>
        </Box>
        <Button variant="default">
          <Text>Yeni Ana Kategori</Text>
          <CustomPlusIcon />
        </Button>
      </Box>
      <Button
        variant="default"
        sx={{
          marginTop: 5,
          color: '#fff',
          width: '100%',
          height: 'auto',
          border: 'none',
          borderRadius: 20,
          padding: '25px 30px',
          backgroundColor: t.colors.green[6],
          transition: 'all 0.15s ease-in-out',
          boxShadow: '0px 37px 44px -13px rgba(104, 48, 48, 0.10)',
          '&:hover': {
            backgroundColor: t.colors.green[5],
          },
          '> div > span': {
            gap: 5,
            width: '100%',
            display: 'flex',
            fontWeight: 500,
            fontSize: '18px',
            alignItems: 'center',
            flexDirection: 'row',
            color: t.colors.gray[0],
            justifyContent: 'center',
          },
        }}
      >
        <Text>Kaydet</Text>
      </Button>
    </Menu.Dropdown>
  );
}

export default TemplateMenu;
