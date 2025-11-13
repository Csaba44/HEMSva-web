<?php

namespace App\Providers;

use App\Models\Mission;
use App\Models\Repositioning;
use App\Models\TransportFlight;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Relation::morphMap([
            'mission' => Mission::class,
            'transport_flight' => TransportFlight::class,
            'repositioning' => Repositioning::class,
        ]);
    }
}
