"use client";

import {
    BlockNoteEditor, PartialBlock
} from "@blocknote/core";

import {
    useCreateBlockNote
} from "@blocknote/react";

import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?:boolean;
}

const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    const {resolvedTheme} = useTheme();
    const {edgestore} = useEdgeStore();

    const handleUpload = async(file: File)=> {
        const response = await edgestore.publicFiles.upload({
            file
        });
        return response.url;
    }
    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent? JSON.parse(initialContent) as PartialBlock[]: undefined,
        uploadFile: handleUpload
    })
    return (
        <div>
      <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={() => {
        onChange(JSON.stringify(editor.document, null, 2));
      }}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
    </div>
    )
}

export default Editor;

// "use client"; // this registers <Editor> as a Client Component
// import "@blocknote/core/fonts/inter.css";
// import { useCreateBlockNote } from "@blocknote/react";
// import { BlockNoteView } from "@blocknote/mantine";
// import "@blocknote/mantine/style.css";
 
// // Our <Editor> component we can reuse later
// export default function Editor() {
//   // Creates a new editor instance.
//   const editor = useCreateBlockNote();
 
//   // Renders the editor instance using a React component.
//   return <BlockNoteView editor={editor} />;
// }