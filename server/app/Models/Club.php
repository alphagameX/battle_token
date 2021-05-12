<?php

namespace App\Models;

use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Club extends Authenticatable implements JWTSubject
{
    use HasFactory;
    use Uuid;
    use Notifiable;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable =  array(
        'email', 'country', 'sex', 'name','password', 'username', 'background', 'profil'
    );

    protected $guarded = array(
        'bt'
    );

    protected $hidden = array(
        'created_at', 'updated_at', 'password', 'remember_token'
    );

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier() {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }    

    public function setPasswordAttribute($password) {
        $this->attributes['password'] = bcrypt($password);
    }

}
