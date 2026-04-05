<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/portfolio', [PortfolioController::class, 'portfolio'])->name('portfolio');
Route::post('/contact', [PortfolioController::class, 'contact'])->name('contact');
