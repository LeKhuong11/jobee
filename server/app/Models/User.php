<?php 

use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'birthday',
        'phone',
        'address',
        'gender',
        'is_verify',
        'has_job',
        'first_job',
        'first_job_time',
        'avatar',
        'bank_info',
        'job_search_status',
        'verified_by',
        'verified_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
