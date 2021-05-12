<?php

namespace App\Models\Token;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlackToken extends Model
{
    use HasFactory;

    protected $fillable = array(
        'club_id', 'token'
    );

    static function add($token) {
        $white = WhiteToken::all()->where('token', '=', $token)->first();
        if($white != null)
            WhiteToken::revoke($white);
    }
}
