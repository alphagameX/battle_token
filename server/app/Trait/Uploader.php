<?php

namespace App\Trait;


use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

trait Uploader {

    public function fileUpload(UploadedFile $file, string $path, array $authorized = []) {

        $isValid = false;

        foreach($authorized as $ext) {
            if($ext == $file->extension()) {
                $isValid = true;
            }
        }

        $ko = $file->getSize() / 1024;

        if($isValid && $ko < 1000) {
            $name = time() . '.'  . $file->getClientOriginalExtension();
            $destinationPath = public_path($path);
            $newFile = $file->move($destinationPath,  $name);

            return $newFile;
        }
        return false;
    }


    public function secureFileRemove(string $strfile, string $path = null) {
        if($path != null) {
            $files = Storage::disk('public')->allFiles($path);
            foreach($files as $file) {
                if("storage/" . $file == $strfile) {
                    File::delete($strfile);
                    if(count(Storage::disk('public')->allFiles($path)) == 0)
                        File::deleteDirectory("storage/" . $path);
                }
            }
        } else {
            File::delete($strfile);
        }
    }

}