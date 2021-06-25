import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import '../../assets/scss/plugins/ck_editor.scss';

const editorConfiguration = {
    toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "|",
        "indent",
        "outdent",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
        "codeBlock",
        "|",
        "imageUpload",
        "imageStyle:full",
        "imageStyle:side",
        "|",
        "mediaEmbed",
        "insertTable",
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "|",
        "undo",
        "redo"
    ],
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
            {
                model: 'headingFancy',
                view: {
                    name: 'h2',
                    classes: 'fancy'
                },
                title: 'Heading 2 (fancy)',
                class: 'ck-heading_heading2_fancy',

                // It needs to be converted before the standard 'heading2'.
                converterPriority: 'high'
            },
            {
                model: 'textCenter',
                view: {
                    name: 'p',
                    classes: 'text-center'
                },
                title: 'Text Center',

                // It needs to be converted before the standard 'heading2'.
                converterPriority: 'high'
            },
        ]
    },
    link: {
        // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
        addTargetToExternalLinks: true,

        // Let the users control the "download" attribute of each link.
        decorators: {
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            },
            openInNewTab: {
                mode: 'manual',
                label: 'Open in a new tab',
                defaultValue: true,			// This option will be selected by default.
                attributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                }
            },
            button: {
                mode: 'manual',
                label: 'button',
                defaultValue: false,			// This option will be selected by default.
                attributes: {
                    class: 'btn'
                }
            },
        }
    }
};

const AddProductDetail = props => {
    const [addedData, setData] = React.useState('');

    const handleChange = (event, editor) => {
        const data = editor.getData();
        setData(data);
        console.log({ event, editor, data });
    }

    let editorEl = null;

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Add Product Detail</h1>
            <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                data="<p>Add your product information</p>"
                onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                    console.log(Array.from(editor.ui.componentFactory.names()));

                    // Insert the toolbar before the editable area.
                    editor.ui.getEditableElement().parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                    );

                    editorEl = editor;
                }}
                onError={({ willEditorRestart }) => {
                    // If the editor is restarted, the toolbar element will be created once again.
                    // The `onReady` callback will be called again and the new toolbar will be added.
                    // This is why you need to remove the older toolbar.
                    if (willEditorRestart) {
                        editorEl.ui.view.toolbar.element.remove();
                    }
                }}
                onChange={handleChange}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            {/* <div contentEditable='false' dangerouslySetInnerHTML={{ __html: dataTest }}></div> */}
            <div>
                {ReactHtmlParser(addedData)}
            </div>
        </>
    )
}

export default AddProductDetail;
