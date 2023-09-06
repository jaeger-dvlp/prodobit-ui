import React from 'react';
import Picker from '@emoji-mart/react';
import { MockNotesData, TNote } from 'mockdata';
import { ProdobitAppTheme as t } from '@/theme';
import { BubbleMenu, useEditor } from '@tiptap/react';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { Box, Title, createStyles, Button } from '@mantine/core';
import { getRenderedDate } from '@/components/views/items/edit/Info';

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
} from '@/components/icons';

function BoldIcon() {
  return <RteBoldIcon width={20} height={20} />;
}
function ItalicIcon() {
  return <RteItalicIcon width={20} height={20} />;
}
function UnderlineIcon() {
  return <RteUnderlineIcon width={20} height={20} />;
}
function LinkIcon() {
  return <RteLinkIcon width={20} height={20} />;
}
function AlignLeftIcon() {
  return <RteAlignLeftIcon width={20} height={20} />;
}
function AlignCenterIcon() {
  return <RteAlignCenterIcon width={20} height={20} />;
}
function AlignRightIcon() {
  return <RteAlignRightIcon width={20} height={20} />;
}

type Props = {
  item: any;
};

const styles = createStyles({
  root: {
    gap: 30,
    width: '100%',
    paddingTop: 50,
    display: 'grid',
    gridTemplateColumns: '1fr',
  },
  pageHeading: {
    fontWeight: 500,
    fontSize: '31px',
    paddingBottom: 30,
    color: t.colors.gray[9],
    borderBottom: `1px solid rgba(0, 0, 0, 0.20)`,
  },
  editorContainer: {
    gap: 14,
    display: 'flex',
    borderRadius: 20,
    position: 'relative',
    alignItems: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 12px 10px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.50)!important',
    outline: `1px solid ${t.colors.gray[0]}`,
    ':focus-within': {
      outline: `1px solid ${t.colors.gray[3]}`,
    },
    '> .rich-text-editor': {
      width: '100%',
      border: 'none',
      transition: 'all 0.15s ease',
      textarea: {
        backgroundColor: 'transparent!important',
      },
    },
    '> .rte-footer': {
      gap: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '> .picker-btns': {
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
      },
      '> .publish-btn': {
        width: 'auto',
        color: '#fff',
        height: 'auto',
        borderRadius: 100,
        padding: '9px 15px',
        backgroundColor: '#000!important',
      },
    },
  },
  rteControlsGroup: {
    padding: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    border: `2px solid ${t.colors.gray[2]}`,
    boxShadow: '0px 17px 34px -13px rgba(48, 57, 104, 0.50)',
  },
  rteExtension: {
    width: 30,
    height: 30,
    color: t.colors.gray[6],
    border: 'none!important',
    transition: 'all 0.15s ease',
    borderRadius: '5px!important',
    ':hover': {
      backgroundColor: `${t.colors.gray[3]}!important`,
    },
  },
  notesContainer: {
    gap: 10,
    width: '100%',
    display: 'flex',
    height: '100%',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  noteBlock: {
    gap: 54,
    height: '100%',
    width: '100%',
    display: 'flex',
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    padding: '20px 40px 20px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    boxShadow:
      '0px 18.26189px 22.82736px 0px rgba(0, 0, 0, 0.05), -0.76091px 0.76091px 0.76091px -1.52182px rgba(255, 255, 255, 0.35) inset, 0px 0.76091px 6.0873px 0px rgba(255, 255, 255, 0.35) inset',
    '&:before': {
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      content: '""',
      position: 'absolute',
      backdropFilter: 'blur(19.5px)',
    },
    '> .meta-data': {
      gap: 9,
      minWidth: 115,
      display: 'flex',
      borderRadius: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'stretch',
      padding: '10px 30px 10px 10px',
      backgroundColor: 'rgba(255, 255, 255, 0.40)',
      '> .avatar': {
        width: 50,
        height: 50,
        borderRadius: 50,
        objectFit: 'cover',
        objectPosition: 'center',
      },
      '> .divider': {
        width: 50,
        minHeight: 5,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        '> div': {
          width: 1,
          opacity: 0.2,
          height: '100%',
          backgroundColor: t.colors.gray[9],
        },
      },
      '> .user': {
        gap: 5,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '> .name': {
          lineHeight: 0.9,
          fontWeight: 600,
          fontSize: '12px',
          color: t.colors.gray[9],
        },
        '> .date': {
          opacity: 0.4,
          lineHeight: 0.9,
          fontWeight: 400,
          fontSize: '12px',
          color: t.colors.gray[9],
        },
      },
    },
    '> .note': {
      opacity: 0.9,
      width: '100%',
      fontWeight: 300,
      fontSize: '15px',
      whiteSpace: 'pre-wrap',
      color: t.colors.gray[9],
      mixBlendMode: 'color-burn',
    },
  },
});

function NoteBlock({ note }: { note: TNote }) {
  const { classes } = styles();
  return (
    <Box className={classes.noteBlock}>
      <Box className="meta-data">
        <img className="avatar" src={note.user.avatar} alt={note.user.name} />
        <Box className="divider">
          <div />
        </Box>
        <Box className="user">
          <span className="name">{note.user.name}</span>
          <span className="date">{getRenderedDate(note.date)}</span>
        </Box>
      </Box>
      <Box className="note">{note.content}</Box>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PaProductionItemNotesContent({ item }: Props) {
  const { classes } = styles();
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

  return (
    <Box className={classes.root}>
      <Title className={classes.pageHeading} order={1}>
        Üretim Notları
      </Title>
      <Box className={classes.editorContainer}>
        <RichTextEditor
          editor={editor}
          className="rich-text-editor"
          placeholder="Yorumunu yaz.."
          styles={{
            content: {
              minHeight: 30,
              fontSize: '12px',
              backgroundColor: 'transparent!important',
            },
          }}
        >
          {editor && (
            <BubbleMenu editor={editor}>
              <RichTextEditor.ControlsGroup className={classes.rteControlsGroup}>
                <RichTextEditor.Bold className={classes.rteExtension} icon={BoldIcon} />
                <RichTextEditor.Italic className={classes.rteExtension} icon={ItalicIcon} />
                <RichTextEditor.Underline className={classes.rteExtension} icon={UnderlineIcon} />
                <RichTextEditor.Link className={classes.rteExtension} icon={LinkIcon} />
                <RichTextEditor.ControlsGroup ml={10}>
                  <RichTextEditor.AlignLeft className={classes.rteExtension} icon={AlignLeftIcon} />
                  <RichTextEditor.AlignCenter
                    className={classes.rteExtension}
                    icon={AlignCenterIcon}
                  />
                  <RichTextEditor.AlignRight
                    className={classes.rteExtension}
                    icon={AlignRightIcon}
                  />
                </RichTextEditor.ControlsGroup>
              </RichTextEditor.ControlsGroup>
            </BubbleMenu>
          )}
          <RichTextEditor.Content />
        </RichTextEditor>
        <Box className="rte-footer">
          <Button className="picker-btns" onClick={() => setEmojiPicker(!emojiPicker)}>
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
          <Button className="picker-btns">
            <RteAttachmentIcon width={20} height={20} />
          </Button>
          <Button variant="default" className="publish-btn">
            Yayınla
          </Button>
        </Box>
      </Box>
      <Box className={classes.notesContainer}>
        {MockNotesData.map((note, i) => (
          <NoteBlock key={`note-${i}`} note={note} />
        ))}
      </Box>
    </Box>
  );
}

export default PaProductionItemNotesContent;
