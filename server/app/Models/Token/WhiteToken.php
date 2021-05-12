<?php

namespace App\Models\Token;

use App\Models\Club;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhiteToken extends Model
{
    use HasFactory;

    protected $fillable = array(
        'club_id', 'token'
    );

    //protected $table = "white_tokens";

    

    static function add($token, $user_id) {
        $data = array(
            'club_id' => $user_id,
            'token' => $token
        );
        $whiteToken = new WhiteToken($data);

        if(($white = WhiteToken::all()->where('club_id', '=', $user_id)->first()) != null) {
            self::revoke($white);
        }

        $whiteToken->save();
        return $whiteToken;
    }

    static function revoke($white) {
        $black = new BlackToken(array('club_id' => $white->club_id, 'token' => $white->token));
        $white->delete();
        $black->save();
    }


    public function club() {
        return $this->belongsTo(App\Models\Club::class);
    }
}
