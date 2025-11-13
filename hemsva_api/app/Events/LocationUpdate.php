<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LocationUpdate implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public string $callsign;
    public float $latitude;
    public float $longitude;
    public float $altitude;
    public int $timestamp;
    public string $userName;


    /**
     * Create a new event instance.
     */
    public function __construct(string $callsign, float $latitude, float $longitude, float $altitude, string $userName)
    {
        $this->callsign = $callsign;
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        $this->altitude = $altitude;
        $this->userName = $userName;
        $this->timestamp = time();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('aircraft-tracking'),
        ];
    }

    public function broadcastAs(): string
    {
        return 'location.updated';
    }
}
