//We will use Tauri to access the file system and store the photos in the assets folder.
export class CharacterPhoto {
    photo: string;
    photoDescription: string;
    photoAlt: string;

    constructor(photo: string, photoDescription: string, photoAlt: string) {
        this.photo = photo;
        this.photoDescription = photoDescription;
        this.photoAlt = photoAlt;
    }
}