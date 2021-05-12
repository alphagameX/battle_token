<?php

namespace App\Http\Middleware;

use App\Models\Token\BlackToken;
use App\Trait\JsonResponse;
use Closure;
use Illuminate\Http\Request;

class TokenIsValid
{
    use JsonResponse;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $bearer = ($request = request())->bearerToken();
        if (($black = BlackToken::all()->where('token', '=', $bearer)->first()) != null) {
            return redirect(route('unauthorized'));
        }
        return $next($request);
    }
}
