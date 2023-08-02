/* eslint-disable react/function-component-definition */
import React from 'react';
import Picker from '@emoji-mart/react';
import { Box, Button, Sx, Text } from '@mantine/core';
import { ProdobitAppTheme as t } from '@/theme';
import { BubbleMenu, useEditor } from '@tiptap/react';
import { RichTextEditor, Link } from '@mantine/tiptap';

// RTE Extensions
import StarterKit from '@tiptap/starter-kit';
import SubScript from '@tiptap/extension-subscript';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';

import {
  RteLinkIcon,
  RteBoldIcon,
  RteEmojiIcon,
  RteItalicIcon,
  RteUnderlineIcon,
  RteAlignLeftIcon,
  RteAlignRightIcon,
  RteAttachmentIcon,
  RteAlignCenterIcon,
  RightIndicatorArrow,
} from '@/components/icons';

const BoldIcon = () => <RteBoldIcon width={20} height={20} />;
const ItalicIcon = () => <RteItalicIcon width={20} height={20} />;
const UnderlineIcon = () => <RteUnderlineIcon width={20} height={20} />;
const LinkIcon = () => <RteLinkIcon width={20} height={20} />;
const AlignLeftIcon = () => <RteAlignLeftIcon width={20} height={20} />;
const AlignCenterIcon = () => <RteAlignCenterIcon width={20} height={20} />;
const AlignRightIcon = () => <RteAlignRightIcon width={20} height={20} />;

function EditTextEditor() {
  const editor = useEditor({
    extensions: [
      Link,
      Underline,
      SubScript,
      Highlight,
      StarterKit,
      Superscript,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: "<p>Buradaki ürünlerin bir <strong>kısmı</strong> kusurlu, seri 500'den..</p>",
  });

  const [emojiPicker, setEmojiPicker] = React.useState(false);

  const ExtensionSX: Sx = {
    width: 30,
    height: 30,
    color: t.colors.gray[6],
    border: 'none!important',
    transition: 'all 0.15s ease',
    borderRadius: '5px!important',
    ':hover': {
      backgroundColor: `${t.colors.gray[3]}!important`,
    },
  };

  return (
    <Box
      sx={{
        gap: 14,
        maxWidth: 550,
        display: 'flex',
        padding: '12px 0px',
        position: 'relative',
        alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <RichTextEditor
        editor={editor}
        placeholder="Yorumunu yaz.."
        sx={{
          width: '100%',
          marginTop: 40,
          border: 'none',
          borderRadius: 10,
          padding: '10px 20px',
          transition: 'all 0.15s ease',
          outline: `1px solid ${t.colors.gray[0]}`,
          ':focus-within': {
            outline: `1px solid ${t.colors.gray[3]}`,
          },
        }}
      >
        {editor && (
          <BubbleMenu editor={editor}>
            <RichTextEditor.ControlsGroup
              sx={{
                padding: 2,
                borderRadius: 10,
                backgroundColor: '#fff',
                border: `2px solid ${t.colors.gray[2]}`,
                boxShadow: '0px 17px 34px -13px rgba(48, 57, 104, 0.50)',
              }}
            >
              <RichTextEditor.Bold sx={ExtensionSX} icon={BoldIcon} />
              <RichTextEditor.Italic sx={ExtensionSX} icon={ItalicIcon} />
              <RichTextEditor.Underline sx={ExtensionSX} icon={UnderlineIcon} />
              <RichTextEditor.Link sx={ExtensionSX} icon={LinkIcon} />
              <RichTextEditor.ControlsGroup ml={10}>
                <RichTextEditor.AlignLeft sx={ExtensionSX} icon={AlignLeftIcon} />
                <RichTextEditor.AlignCenter sx={ExtensionSX} icon={AlignCenterIcon} />
                <RichTextEditor.AlignRight sx={ExtensionSX} icon={AlignRightIcon} />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.ControlsGroup>
          </BubbleMenu>
        )}

        <RichTextEditor.Content />
      </RichTextEditor>
      <Box
        sx={{
          gap: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          sx={{
            padding: 2,
            width: 'auto',
            height: 'auto',
            borderRadius: 5,
            color: '#292D32',
            position: 'relative',
            transition: 'all 0.15s ease',
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: t.colors.gray[3],
            },
          }}
          onClick={() => setEmojiPicker(!emojiPicker)}
        >
          {emojiPicker && (
            <Box
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{ position: 'absolute', right: 0, bottom: 50 }}
            >
              <Picker
                native
                locale="tr"
                theme="light"
                navPosition="bottom"
                onEmojiSelect={(val: { native: string }) => {
                  editor?.commands.insertContent(val.native);
                  setEmojiPicker(false);
                }}
              />
            </Box>
          )}
          <RteEmojiIcon width={20} height={20} />
        </Button>
        <Button
          sx={{
            padding: 2,
            width: 'auto',
            height: 'auto',
            borderRadius: 5,
            color: '#292D32',
            transition: 'all 0.15s ease',
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: t.colors.gray[3],
            },
          }}
        >
          <RteAttachmentIcon width={20} height={20} />
        </Button>
        <Button
          variant="default"
          sx={{
            width: 'auto',
            color: '#fff',
            height: 'auto',
            borderRadius: 100,
            padding: '9px 15px',
            backgroundColor: '#000!important',
          }}
        >
          Yayınla
        </Button>
      </Box>
      <Box
        component="ul"
        sx={{
          margin: 0,
          padding: 0,
          marginTop: 40,
          width: '100%',
          height: 'auto',
          display: 'flex',
          listStyle: 'none',
          alignItems: 'start',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          '> li': {
            margin: 0,
            zIndex: 1,
            padding: 10,
            minWidth: 125,
            display: 'flex',
            fontWeight: 500,
            fontSize: '12px',
            overflow: 'visible',
            textAlign: 'center',
            width: 'fit-content',
            position: 'relative',
            lineHeight: '14.4px',
            alignItems: 'center',
            justifyContent: 'center',
            '> svg': {
              right: 0,
              top: '50%',
              color: '#fff',
              height: '100%',
              position: 'absolute',
              transform: 'translateY(-50%) translateX(50%)',
            },
            ':nth-child(1)': {
              zIndex: 4,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            },
            ':nth-child(2)': {
              zIndex: 3,
            },
            ':nth-child(3)': {
              zIndex: 2,
            },
            ':nth-child(4)': {
              zIndex: 1,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
            },
          },
        }}
      >
        <Box
          component="li"
          sx={{
            color: t.colors.green[6],
            backgroundColor: t.colors.green[1],
          }}
        >
          <Text>Toplantı</Text>
          <RightIndicatorArrow />
        </Box>
        <Box
          component="li"
          sx={{
            color: t.colors.yellow[7],
            backgroundColor: t.colors.yellow[1],
          }}
        >
          <Text>Toplantı</Text>
          <RightIndicatorArrow />
        </Box>
        <Box
          component="li"
          sx={{
            color: t.colors.red[6],
            backgroundColor: t.colors.red[1],
          }}
        >
          <Text>Toplantı</Text>
          <RightIndicatorArrow />
        </Box>
        <Box
          component="li"
          sx={{
            color: t.colors.gray[6],
            backgroundColor: t.colors.gray[1],
          }}
        >
          <Text>Toplantı</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default EditTextEditor;
