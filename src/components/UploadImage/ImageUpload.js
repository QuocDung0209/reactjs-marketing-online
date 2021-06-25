import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    imagePreview: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '275px',
        height: '275px',
        color: theme.palette.text.secondary,
        /* offset-x | offset-y | blur-radius | color */
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        boxShadow: 'inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)',
    },
    previewText: {
        width: '100%',
        marginTop: '20px',
    },
    image: {
        position: 'relative',
        marginTop: '-18px',
        marginLeft: '-18px',
    },
    fileInput: {
        border: '4px solid lightgray',
        padding: '10px',
        margin: '15px 0',
        cursor: 'pointer',
    }
})

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.classes = this.props.classes;
        this.state = { file: '', imagePreviewUrl: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let imagePreview = null;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} width={281} height={281} className={this.classes.image} alt="Product" />);
        } else {
            imagePreview = (<div className={this.classes.previewText}>Please select an Image for Preview</div>);
        }

        return (
            <div>
                <input className={this.classes.fileInput}
                    type="file"
                    onChange={(e) => this.handleImageChange(e)} />
                <div className={this.classes.imagePreview}>
                    {imagePreview}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ImageUpload);