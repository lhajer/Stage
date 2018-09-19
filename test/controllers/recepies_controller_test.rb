require 'test_helper'

class RecepiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @recepie = recepies(:one)
  end

  test "should get index" do
    get recepies_url, as: :json
    assert_response :success
  end

  test "should create recepie" do
    assert_difference('recepie.count') do
      post recepies_url, params: { recepie: { description: @recepie.description, directions: @recepie.directions, prep_time: @recepie.prep_time, title: @recepie.title } }, as: :json
    end

    assert_response 201
  end

  test "should show recepie" do
    get recepie_url(@recepie), as: :json
    assert_response :success
  end

  test "should update recepie" do
    patch recepie_url(@recepie), params: { recepie: { description: @recepie.description, directions: @recepie.directions, prep_time: @recepie.prep_time, title: @recepie.title } }, as: :json
    assert_response 200
  end

  test "should destroy recepie" do
    assert_difference('recepie.count', -1) do
      delete recepie_url(@recepie), as: :json
    end

    assert_response 204
  end
end
