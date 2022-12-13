// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract KickStarter {
    uint256 public totalProjects;

    struct Projects {
        string projectName;
        uint256 projectId;
        uint256 fundGoal;
        address payable creator;
    }

    mapping(address => uint256) public crowdEarning;

    function createProject(
        string memory _projectName,
        uint256 _projectId,
        uint256 _fundGoal,
        address payable _creator
    ) public {}
}
